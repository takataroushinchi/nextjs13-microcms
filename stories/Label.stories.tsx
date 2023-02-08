import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Label } from "../components/ui/label";

export default {
  title: "ShadcnUI/Label",
  component: Label,
  argTypes: {
    htmlFor: { control: "text" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Label>;

const LabelTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>ラベル</Label>
);

export const Primary = LabelTemplate.bind({});
Primary.args = {
  htmlFor: "exclude-done",
  className: "whitespace-nowrap",
};

export const Error = LabelTemplate.bind({});
export const Disabled = LabelTemplate.bind({});
