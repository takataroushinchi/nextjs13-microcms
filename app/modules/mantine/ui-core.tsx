"use client";

import { Box, Button, Flex } from "@mantine/core";

export const UiCore = () => {
  return (
    <Box className="space-x-8 p-8">
      <Flex gap="md">
        <Box w={140}>
          <Button>Button</Button>
        </Box>
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
    </Box>
  );
};
