import { CategoryList } from "app/components/category-list";
import RefreshBtn from "app/components/refresh-btn";
import Spinner from "app/components/spinner";
import { Suspense } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <div className="flex justify-center">
          <RefreshBtn />
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
