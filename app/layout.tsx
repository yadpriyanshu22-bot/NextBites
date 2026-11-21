
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Explore, search, and discover delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
