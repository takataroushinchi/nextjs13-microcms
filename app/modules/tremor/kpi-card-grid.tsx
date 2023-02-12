"use client";

import { Block, Tab, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";

import { ChartView } from "@/app/modules/tremor/chart-view";
import { KpiCard } from "@/app/modules/tremor/kpi-card";
import { TableView } from "@/app/modules/tremor/table-view";

export const KpiCardGrid = () => {
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
          <KpiCard />

          <Block marginTop="mt-6">
            <ChartView />
          </Block>
        </>
      ) : (
        <Block marginTop="mt-6">
          <TableView />
        </Block>
      )}
    </main>
  );
};
