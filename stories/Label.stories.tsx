import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Label } from "../components/ui/label";

export default {
  title: "ShadcnUI/Label",
  component: Label,
  argTypes: {
    htmlFor: { control: "color" },
    className: { control: "color" },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>ラベル</Label>
);

export const Primary = Template.bind({});
Primary.args = {
  htmlFor: "exclude-done",
  className: "whitespace-nowrap",
};

export const Disabled = Template.bind({});
