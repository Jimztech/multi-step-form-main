import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";


const ubuntu =  Ubuntu({
  weight: ['400', '500', '700'],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "multi form",
  description: "Form created by james chiagozie ibezim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
