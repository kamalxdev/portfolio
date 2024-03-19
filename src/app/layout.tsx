import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";


const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFolio- Kamal Singh",
  description: "portfolio of Kamal Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}
