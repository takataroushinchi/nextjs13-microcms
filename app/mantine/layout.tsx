"use client";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <div className="flex justify-center">
          <ul>
            <li>Calender</li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 px-2 pt-1">{children}</main>
    </section>
  );
}
