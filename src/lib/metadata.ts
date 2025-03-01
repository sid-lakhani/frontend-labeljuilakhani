import { Metadata } from "next";

type MetadataProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const constructMetadata = ({
  preTitle = "",
  title = "Label Jui Lakhani - Crafted With Love",
  description = "Explore the exquisite collections of Label Jui Lakhani, featuring handcrafted luxury ethnic wear that blends tradition with modern elegance.",
  url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labeljuilakhani.in",
  image = "https://labeljuilakhani.in/open-graph/HOME.png",
}: MetadataProps): Metadata => ({
  title: preTitle + title,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  description: description,
  authors: {
    name: "Label Jui Lakhani",
    url: url,
  },
  creator: "Label Jui Lakhani",
  publisher: "Label Jui Lakhani",
  openGraph: {
    type: "website",
    url: url,
    title: preTitle + title,
    description: description,
    siteName: "Label Jui Lakhani",
    emails: ["labeljuilakhani@gmail.com"],
    locale: "en_US",
    images: [
      {
        url: image,
        alt: preTitle + title,
      },
    ],
  },
  metadataBase: new URL(url),
});
