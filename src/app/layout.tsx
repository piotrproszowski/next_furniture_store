import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Furniture Store",
  description: "Store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Container className='py-2'>{children}</Container>
      </body>
    </html>
  );
}
