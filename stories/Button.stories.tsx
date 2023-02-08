import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

export default {
  title: "RippleUI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: true,
  label: "Button",
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  status: true,
  colors: "primary",
  outline: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  status: true,
  colors: "secondary",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  size: "sm",
  ghost: true,
  label: "Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
  size: "sm",
  rounded: true,
  label: "Button",
};

export const Loading = Template.bind({});
Loading.args = {
  size: "sm",
  loading: true,
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "sm",
  disabled: true,
  label: "Button",
};
