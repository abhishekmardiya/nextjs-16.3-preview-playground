"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const Form = () => {
  const { bfcacheId } = useRouter();

  const userName = "Next.js";

  return (
    <div className="min-h-screen px-6 py-12">
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center justify-center">
        <section className="max-w-fit overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-black/50 dark:text-white/50">
                Interactive Preview
              </span>
              <p className="max-w-md text-sm text-black/60 dark:text-white/60">
                Change the value, navigate away, and come back to test the cache
                behavior.
              </p>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                defaultValue={userName}
                className="rounded-2xl border border-black/10 bg-black/3 px-4 py-3 text-base outline-none transition-colors placeholder:text-black/30 focus:border-black/40 focus:bg-white dark:border-white/10 dark:bg-white/3 dark:placeholder:text-white/30 dark:focus:border-white/40 dark:focus:bg-white/5"
                key={bfcacheId}
              />
            </label>

            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
