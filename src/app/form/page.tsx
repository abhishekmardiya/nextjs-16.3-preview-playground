import { io } from "next/cache";
import { Suspense } from "react";
import { Form } from "@/components/Form";
import { FormSkeleton } from "@/components/Skeleton";

const DateComponent = async () => {
  await io();

  const timeStamp = Date.now();

  return (
    <div className="flex justify-center px-6 pt-8">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white py-1.5 pr-1.5 pl-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
        <span className="text-black/50 dark:text-white/50">Time Stamp :</span>
        <span className="rounded-full bg-black/5 px-3 py-1 font-mono font-medium tabular-nums dark:bg-white/10">
          {timeStamp}
        </span>
      </div>
    </div>
  );
};

export default function FormPage() {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <DateComponent />
      <Form />
    </Suspense>
  );
}
