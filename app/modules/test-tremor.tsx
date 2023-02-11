"use client";

import {
  BadgeDelta,
  Block,
  Card,
  ColGrid,
  DeltaType,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabList,
  Text,
  Title,
} from "@tremor/react";
import { useState } from "react";

import { TestChartView } from "@/app/modules/test-chart-view";
import { TestTableView } from "@/app/modules/test-table-view";

// KpiCard
type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 45,564",
    progress: 36.5,
    target: "$ 125,000",
    delta: "23.9%",
    deltaType: "increase",
  },
  {
    title: "Customers",
    metric: "1,072",
    progress: 53.6,
    target: "2,000",
    delta: "10.1%",
    deltaType: "moderateDecrease",
  },
];

export const TestTremor = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard - tremor</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue={1}
        handleSelect={(value) => setSelectedView(value)}
        marginTop="mt-6"
      >
        <Tab value={1} text="Overview" />
        <Tab value={2} text="Detail" />
      </TabList>

      {selectedView === 1 ? (
        <>
          <ColGrid
            numColsMd={2}
            numColsLg={3}
            marginTop="mt-6"
            gapX="gap-x-6"
            gapY="gap-y-6"
          >
            {kpiData.map((item) => (
              <Card key={item.title}>
                <Flex alignItems="items-start">
                  <Block truncate={true}>
                    <Text>{item.title}</Text>
                    <Metric truncate={true}>{item.metric}</Metric>
                  </Block>
                  <BadgeDelta deltaType={item.deltaType} text={item.delta} />
                </Flex>
                <Flex marginTop="mt-4" spaceX="space-x-2">
                  <Text
                    truncate={true}
                  >{`${item.progress}% (${item.metric})`}</Text>
                  <Text>{item.target}</Text>
                </Flex>
                <ProgressBar percentageValue={item.progress} marginTop="mt-2" />
              </Card>
            ))}
          </ColGrid>

          <Block marginTop="mt-6">
            <TestChartView />
          </Block>
        </>
      ) : (
        <Block marginTop="mt-6">
          <TestTableView />
        </Block>
      )}
    </main>
  );
};
