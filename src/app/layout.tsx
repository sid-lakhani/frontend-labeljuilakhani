import { constructMetadata } from "@/lib/metadata";
import "./globals.css";
import { Montserrat, PlayfairDisplay, Moontime, Sen, Kenao, Tillana } from "@/lib/fonts";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3265c473-0ce6-4c62-aa7b-bc625acf96d5"
        ></script>
      </head>
      <body
        className={`select-none ${Montserrat.variable} ${Tillana.variable} ${PlayfairDisplay.variable} ${Kenao.variable} ${Moontime.variable} ${Sen.variable} bg-quaternary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
