import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "NextBites",
  description: "Browse, search, and cook recipes.",
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