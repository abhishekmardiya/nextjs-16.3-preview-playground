import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Link href="/test-1" className="text-2xl font-bold underline">
        Go to Test 1
      </Link>
    </main>
  );
}
