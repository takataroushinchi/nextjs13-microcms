"use client";

import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center rounded rounded-tr-none rounded-br-none bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        router.refresh();
      }}
    >
      <RefreshCcw />
      Refresh current route
    </button>
  );
}
