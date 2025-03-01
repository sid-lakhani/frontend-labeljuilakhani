import CollectionPage from "./CollectionPage";
import { constructMetadata } from '@/lib/metadata';

interface Collection {
  Title: string;
  titleSlugUrl: string;
  Description: string;
  Images: { url: string }[];
  HomeImage: { url: string };
}

async function getCollection(titleSlugUrl: string): Promise<Collection | null> {
  try {
    const res = await fetch(
      `https://cms.labeljuilakhani.in/api/collections?filters[titleSlugUrl][$eq]=${titleSlugUrl}&populate=*`,
      { cache: "no-store" } // Ensure fresh data on each request
    );
    const data = await res.json();

    return data.data?.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;
  }
}

type Params = Promise<{ titleSlugUrl: string }>;

export async function generateMetadata({ params }: { params: Params }) {

  const { titleSlugUrl } = await params;
  const collection = await getCollection(titleSlugUrl);

  return constructMetadata({
    title: collection ? `${collection.Title} | Lookbook - Label Jui Lakhani` : "Lookbook | Label Jui Lakhani",
    description: collection?.Description || "Explore our exclusive lookbook collection.",
    url: `https://labeljuilakhani.in/lookbook/${titleSlugUrl}`,
    image: collection ? `https://cms.labeljuilakhani.in${collection.HomeImage.url}` : "https://labeljuilakhani.in/open-graph/HOME.png",
  });
}

export default async function Page({ params }: { params: Params }) {
  const { titleSlugUrl } = await params;
  const collection = await getCollection(titleSlugUrl);

  if (!collection) {
    return <p className="text-center text-gray-500">Collection not found.</p>;
  }

  return <CollectionPage collection={collection} />;
}
