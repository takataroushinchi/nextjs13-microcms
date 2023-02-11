"use client";

import { Block, Tab, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";

import { TestChartView } from "@/app/modules/test-chart-view";
import { TestKpiCard } from "@/app/modules/test-kpi-card";
import { TestTableView } from "@/app/modules/test-table-view";

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
          <TestKpiCard />

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
