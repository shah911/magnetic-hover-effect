import type { Metadata } from "next";
import { Montserrat_Subrayada } from "next/font/google";
import "./globals.css";

const montserrat_Subrayada = Montserrat_Subrayada({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Magnetic Hover Animation",
  description: "Create by framer motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat_Subrayada.className}>{children}</body>
    </html>
  );
}
