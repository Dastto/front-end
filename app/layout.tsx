import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دستو | بهترین پلتفرم",
  description: "به زودی توضیحات تکیمل میشه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
