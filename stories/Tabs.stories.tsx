import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default {
  title: "ShadcnUI/Tabs",
  component: Tabs,
  argTypes: {
    defaultValue: { control: "select", options: ["account", "password"] },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Tabs>;

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Make changes to your account here. Click save when you&apos;re done.
      </p>
    </TabsContent>
    <TabsContent value="password">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Change your password here. After saving, you&apos;ll be logged out.
      </p>
    </TabsContent>
  </Tabs>
);

export const Account = TabsTemplate.bind({});
Account.args = {
  defaultValue: "account",
  className: "p-4 w-[400px]",
};

export const Password = TabsTemplate.bind({});
Password.args = {
  defaultValue: "password",
  className: "p-4 w-[400px]",
};
