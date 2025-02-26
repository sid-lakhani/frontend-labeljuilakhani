import { constructMetadata } from "@/lib/metadata";
import "./globals.css";
import { Montserrat, PlayfairDisplay, Moontime, Sen, Kenao } from "@/lib/fonts";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`select-none ${Montserrat.variable} ${PlayfairDisplay.variable} ${Kenao.variable} ${Moontime.variable} ${Sen.variable} bg-quaternary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
