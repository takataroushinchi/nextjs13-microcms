"use client";

import { Group } from "@mantine/core";
import { Calendar, DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

function getDay(date: Date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - getDay(date) - 1
  );
}

function endOfWeek(date: Date) {
  return dayjs(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + (6 - getDay(date))
    )
  )
    .endOf("date")
    .toDate();
}

function isInWeekRange(date: Date, value: Date | null) {
  return (
    value &&
    dayjs(date).isBefore(endOfWeek(value)) &&
    dayjs(date).isAfter(startOfWeek(value))
  );
}

export const Calender = () => {
  const [selected, setSelected] = useState<Date[]>([]);
  const [hovered, setHovered] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(null);
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
        <Calendar
          withCellSpacing={false}
          getDayProps={(date) => {
            const isHovered = isInWeekRange(date, hovered);
            const isSelected = isInWeekRange(date, value);
            const isInRange = isHovered || isSelected;
            return {
              onMouseEnter: () => setHovered(date),
              onMouseLeave: () => setHovered(null),
              inRange: isInRange,
              firstInRange: isInRange && date.getDay() === 1,
              lastInRange: isInRange && date.getDay() === 0,
              selected: isSelected,
              onClick: () => setValue(date),
            };
          }}
        />
      </Group>
      <Group>
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
