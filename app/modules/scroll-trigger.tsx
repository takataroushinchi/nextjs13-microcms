"use client";

import { ArrowUp } from "lucide-react";
import { ComponentProps } from "react";

export const ScrollTrigger = () => {
  const toTop: ComponentProps<"button">["onClick"] = (event) => {
    "scrollBehavior" in document.documentElement.style
      ? window.scroll({ top: 0, behavior: "smooth" })
      : window.scrollTo(0, 0);
    event.currentTarget.blur();
  };
  return (
    <button
      aria-label="ScrollTrigger"
      type="button"
      className="btn-outline fixed bottom-4 right-4 grid h-12 w-12 place-items-center bg-white shadow hover:bg-slate-600 hover:shadow-lg dark:hover:bg-sky-600"
      onClick={toTop}
    >
      <ArrowUp />
    </button>
  );
};
