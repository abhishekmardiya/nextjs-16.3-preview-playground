"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Form = () => {
  const pathname = usePathname();

  const userName = "Abhishek";

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <input
          type="text"
          defaultValue={userName}
          className="border-2 border-gray-300 rounded-md p-2"
        />

        <Link
          href={`${pathname === "/test-1" ? "/test-2" : "/test-1"}`}
          className="text-2xl font-bold underline text-blue-600 hover:text-blue-800"
        >
          Go to Test {pathname === "/test-1" ? "2" : "1"}
        </Link>
      </div>
    </div>
  );
};
