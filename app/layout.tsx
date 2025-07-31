import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const cartoonFont = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cartoon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tahir | Cartoon Portfolio",
  description: "Tahir's creative full-stack developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cartoonFont.variable} font-cartoon bg-cartoonWhite antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
