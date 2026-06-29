const shimmer = "animate-pulse rounded-md bg-black/10 dark:bg-white/10";

export const FormSkeleton = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center justify-center">
        <section className="w-full max-w-md overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <div className={`${shimmer} h-3 w-32`} />
              <div className={`${shimmer} h-4 w-full`} />
              <div className={`${shimmer} h-4 w-3/4`} />
            </div>

            <div className="flex flex-col gap-2">
              <div className={`${shimmer} h-4 w-16`} />
              <div className={`${shimmer} h-12 w-full rounded-2xl`} />
            </div>

            <div className={`${shimmer} h-10 w-32 rounded-full`} />
          </div>
        </section>
      </main>
    </div>
  );
};
