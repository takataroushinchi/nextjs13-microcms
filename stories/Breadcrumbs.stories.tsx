import { ComponentMeta, Story } from "@storybook/react";
import Link from "next/link";
import type { FunctionComponent, ReactNode } from "react";
import React from "react";

type Props = {
  children?: ReactNode;
};

type Data = {
  title: string;
  href: string;
}[];

const Breadcrumbs: FunctionComponent<Props> = ({ children }) => {
  return (
    <nav className="text-s breadcrumbs pb-2">
      <ul>{children}</ul>
    </nav>
  );
};

export default {
  title: "RippleUI/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: Story<
  React.ComponentProps<typeof Breadcrumbs> & { data: Data }
> = ({ data, ...args }) => (
  <Breadcrumbs {...args}>
    {data.map((item, index) =>
      item.href !== "" ? (
        <li key={index}>
          <Link
            className="whitespace-nowrap pl-2 text-sky-600 underline"
            href={item.href}
            passHref
          >
            {item.title}
          </Link>
        </li>
      ) : (
        <li key={index}>{item.title}</li>
      )
    )}
  </Breadcrumbs>
);

export const Navigation = Template.bind({});
Navigation.args = {
  data: [
    { title: "Parent", href: `./parent` },
    { title: `Child`, href: "" },
  ],
};

export const Category = Template.bind({});
Category.args = {
  data: [
    { title: "First", href: `./first` },
    { title: "Second", href: `./first/second` },
    { title: `Current`, href: "" },
  ],
};
