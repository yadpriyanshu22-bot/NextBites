import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <span>🍴</span>
          <span>NextBites</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Recipes</Link>
        </nav>
      </div>
    </header>
  );
}