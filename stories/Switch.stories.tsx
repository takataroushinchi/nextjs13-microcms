import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Switch } from "../components/ui/switch";

export default {
  title: "ShadcnUI/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: false,
  className: "whitespace-nowrap",
};

export const Disabled = Template.bind({});
