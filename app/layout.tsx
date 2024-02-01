import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: [
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Fontspring-DEMO-ceraroundpro-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Niju web",
  description: "Make millions with me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="bg-black">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
