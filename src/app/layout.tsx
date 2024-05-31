import type { Metadata } from "next";
import { Inter, Livvic } from "next/font/google";  // Import Livvic font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const livvic = Livvic({
  subsets: ["latin"],
  weight: "100"
});  // Configure Livvic font

export const metadata: Metadata = {
  title: "Achiv's Production",
  description: "The Way Photography Ought To Be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${livvic.className}`}>{children}</body>  {/* Apply both fonts */}
    </html>
  );
}
