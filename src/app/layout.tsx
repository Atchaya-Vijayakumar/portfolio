import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Atchaya | Portfolio",
  metadataBase: new URL("https://www.onedotcommunications.cloud"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Atchaya V", url: "https://github.com/Atchaya-Vijayakumar" },
  ],
  description: "Atchaya portfolio website",
  openGraph: {
    title: "Atchaya| Portfolio",
    description: "Atchaya portfolio website",
    images: [
      {
        url: "./photos.jpeg",
        alt: "Atchaya Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
