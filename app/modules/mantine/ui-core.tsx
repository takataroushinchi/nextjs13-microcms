"use client";

import {
  Box,
  Button,
  Flex,
  Text,
  TransferList,
  TransferListData,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";

const initialValues: TransferListData = [
  [
    { value: "go", label: "GoLang" },
    { value: "js", label: "JavaScript" },
    { value: "ruby", label: "Ruby" },
    { value: "python", label: "Python" },
  ],
  [
    { value: "mongo", label: "MongoDB" },
    { value: "fauna", label: "FaunaDB" },
    { value: "cockroach ", label: "CockroachDB" },
  ],
];

export const UiCore = ({ id }: { id?: string }) => {
  const uuid = useId(id);
  const [state, setState] = useState(uuid);
  const [data, setData] = useState<TransferListData>(initialValues);

  const generateId = () => {
    setState(uuid);
    window.location.reload();
  };

  return (
    <Box className="space-x-8 p-8">
      <Box className="pb-8">
        <Button onClick={generateId}>Generate New ID - id - {state}</Button>
      </Box>
      <Flex gap="md">
        <Box w={200}>
          <Button fullWidth variant="outline">
            Full width button
          </Button>
        </Box>
        <Box w={140}>
          <Button fullWidth variant="outline">
            Button with overflow
          </Button>
        </Box>
        <Box w={140}>
          <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
            Button with overflow
          </Button>
        </Box>
      </Flex>
      <Box>
        <Text style={{ padding: "1rem" }} size="xl">
          Transfer List Component
        </Text>
        <TransferList
          value={data}
          onChange={setData}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={["Languages", "Databases"]}
          breakpoint="sm"
        />
      </Box>
    </Box>
  );
};
