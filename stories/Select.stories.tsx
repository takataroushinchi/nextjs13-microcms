import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default {
  title: "ShadcnUI/Select",
  component: Select,
  argTypes: {
    defaultValue: { control: "text" },
  },
} as ComponentMeta<typeof Select>;

const SelectTemplate: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="aubergine">Aubergine</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
        <SelectItem value="courgette">Courgette</SelectItem>
        <SelectItem value="leek">Leek</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Meat</SelectLabel>
        <SelectItem value="beef">Beef</SelectItem>
        <SelectItem value="chicken">Chicken</SelectItem>
        <SelectItem value="lamb">Lamb</SelectItem>
        <SelectItem value="pork">Pork</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const Fruits = SelectTemplate.bind({});
Fruits.args = {
  defaultValue: "pineapple",
};

export const Meat = SelectTemplate.bind({});
Meat.args = {
  defaultValue: "beef",
};
