import localFont from "next/font/local";

// Montserrat
export const Montserrat = localFont({
  src: [
    { path: "./font/Montserrat/static/Montserrat-Thin.ttf", weight: "100", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-Italic.ttf", weight: "400", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./font/Montserrat/static/Montserrat-Black.ttf", weight: "900", style: "normal" },
    { path: "./font/Montserrat/static/Montserrat-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-montserrat",
});

// Playfair Display
export const PlayfairDisplay = localFont({
  src: [
    { path: "./font/Playfair_Display/static/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-Italic.ttf", weight: "400", style: "italic" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-Black.ttf", weight: "900", style: "normal" },
    { path: "./font/Playfair_Display/static/PlayfairDisplay-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-playfair",
});

// Sen
export const Sen = localFont({
  src: [
    { path: "./font/Sen/static/Sen-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Sen/static/Sen-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/Sen/static/Sen-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./font/Sen/static/Sen-Bold.ttf", weight: "700", style: "normal" },
    { path: "./font/Sen/static/Sen-ExtraBold.ttf", weight: "800", style: "normal" },
  ], variable: "--font-sen",
});

// Kenao
export const Kenao = localFont({
  src: "./font/Kenao.otf",
  variable: "--font-kenao",
});

// Tillana
export const Tillana = localFont({
  src: "./font/Tillana-Regular.ttf",
  variable: "--font-tillana",
});

// Moontime
export const Moontime = localFont({
  src: "./font/Moontime.ttf",
  variable: "--font-moontime",
});
