import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Explore delicious recipes, discover new meals, and find your next favorite dish with NextBites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="main-content">
          <div className="container">{children}</div>
        </main>
        <footer className="footer">
          <div className="container">
            Built with Next.js + TypeScript · NextBites
          </div>
        </footer>
      </body>
    </html>
  );
}