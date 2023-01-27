import { CategoryList } from "app/modules/category-list";
import Spinner from "app/modules/spinner";
import { Suspense } from "react";

import RefreshButton from "@/app/modules/refresh-button";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <div className="flex justify-center">
          <RefreshButton />
          <Suspense fallback={<Spinner />}>
            {/* @ts-ignore*/}
            <CategoryList />
          </Suspense>
        </div>
      </aside>
      <main className="flex flex-1 items-start">{children}</main>
    </section>
  );
}
