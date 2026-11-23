import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">Recipe Not Found</h1>

      <p className="text-gray-600">
        Sorry, we couldn't find the recipe you're looking for.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-orange-500 px-5 py-3 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}