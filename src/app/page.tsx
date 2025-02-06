import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Label Jui Lakhani",
  description: "Welcome to Label Jui Lakhani",
};

export default function Page() {
  return(
    <div>
      <Header />
    </div>
 );
}