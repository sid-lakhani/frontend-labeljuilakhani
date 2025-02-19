import "./globals.css";
import { Montserrat, PlayfairDisplay, Moontime, Sen } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`select-none ${Montserrat.variable} ${PlayfairDisplay.variable} ${Moontime.variable} ${Sen.variable} bg-quaternary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
