import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sulthon Farizudin a.b - Portfolio",
  description: "Portfolio website of Sulthon Farizudin a.b - Front End Web Developer",
  keywords: ["portfolio", "web developer", "frontend", "Sulthon Farizudin a.b"],
  authors: [{ name: "Sulthon Farizudin a.b" }],
  creator: "Sulthon Farizudin a.b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
