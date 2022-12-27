import { BlogResponse } from "libs/microcms";

export async function BlogPromiseProps({
  promise,
}: {
  promise: Promise<BlogResponse>;
}) {
  const { contents } = await promise;

  return (
    <ul>
      {contents.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.title}</h1>
          </li>
        );
      })}
    </ul>
  );
}
