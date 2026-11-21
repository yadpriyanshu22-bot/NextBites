
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        <h2>NextBites 🍴</h2>
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/#recipes">Recipes</Link>
      </div>
    </nav>
  );
}
