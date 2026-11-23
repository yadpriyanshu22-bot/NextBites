"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-3xl font-bold">
        Something went wrong!
      </h2>

      <p className="text-gray-600">
        We couldn't load this page. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-orange-500 px-5 py-3 text-white"
      >
        Try again
      </button>
    </div>
  );
}