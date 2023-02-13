"use client";

import { Group } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

export const Calender = () => {
  const [selected, setSelected] = useState<Date[]>([]);
  const [value, setValue] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <>
      <Group position="center">
        <Calendar />
      </Group>
      <Group></Group>
    </>
  );
};
