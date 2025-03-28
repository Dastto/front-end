import type { Metadata } from "next";
import { yekanBakh } from "@/lib/fonts";
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
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body>{children}</body>
    </html>
  );
}
