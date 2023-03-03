"use client";

import "dayjs/locale/ja";

import { Group } from "@mantine/core";
import {
  Calendar,
  DatePickerInput,
  DatesProvider,
  DateTimePicker,
  MonthPickerInput,
} from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

export const Calender = () => {
  const [selected, setSelected] = useState<Date[]>([]);
  // const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

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
      <Group position="center">
        <DatesProvider
          settings={{ locale: "ja", firstDayOfWeek: 0, weekendDays: [0] }}
        >
          <MonthPickerInput label="Pick month" placeholder="Pick month" />
          <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
        </DatesProvider>
      </Group>
      <Group position="center">
        <DateTimePicker
          valueFormat="DD MMM YYYY hh:mm A"
          label="Pick date and time"
          placeholder="Pick date and time"
          maw={400}
          mx="auto"
        />
      </Group>
    </>
  );
};
