import { Metadata } from "next";

type MetadataProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  url?: string;
  keywords?: string[];
  image?: string;
};

export const constructMetadata = ({
  preTitle = "",
  title = "Label Jui Lakhani - Luxury Ethnic Fashion",
  description = "Explore the exquisite collections of Label Jui Lakhani, featuring handcrafted luxury ethnic wear that blends tradition with modern elegance.",
  url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labeljuilakhani.in",
  keywords = [],
  image = "/open-graph/HOME.png",
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
  keywords: [
    "Label Jui Lakhani",
    "Luxury Ethnic Fashion",
    "Indian Couture",
    "Designer Wear",
    "Ethnic Clothing",
    "Traditional Fashion",
    "Handcrafted Ethnic Wear",
    "Fashion Boutique",
    "Luxury Clothing",
    "Women’s Fashion",
    "Festive Wear",
    "Wedding Collection",
    "Bridal Wear",
    "Sarees",
    "Lehengas",
    "Salwar Suits",
    "Indian Fashion",
    "Tailored Outfits",
    "Handmade Fashion",
    "Embroidered Clothing",
    "Handcrafted Fashion",
    "Elegant Ethnic Wear",
    "Couture Design",
    "Bespoke Fashion",
    "Timeless Style",
    "Designer Couture",
    "Custom Outfits",
    "Designer Consultation",
    "Fashion Inquiries",
    "Collaboration",
    ...keywords,
  ],
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
