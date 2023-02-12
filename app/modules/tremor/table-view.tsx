"use client";

import {
  BadgeDelta,
  Card,
  DeltaType,
  Dropdown,
  DropdownItem,
  MultiSelectBox,
  MultiSelectBoxItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useState } from "react";

export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
  deltaType: DeltaType;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "moderateIncrease",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Peter Moore",
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
];

export const TableView = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <Card>
      <div className="hidden sm:mt-6 sm:flex sm:justify-start sm:space-x-2">
        <MultiSelectBox
          handleSelect={(value) => setSelectedNames(value)}
          placeholder="Select Salespeople"
          maxWidth="max-w-xs"
        >
          {salesPeople.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <Dropdown
          maxWidth="max-w-xs"
          defaultValue="all"
          handleSelect={(value) => setSelectedStatus(value)}
        >
          <DropdownItem value="all" text="All Performances" />
          <DropdownItem value="overperforming" text="Overperforming" />
          <DropdownItem value="average" text="Average" />
          <DropdownItem value="underperforming" text="Underperforming" />
        </Dropdown>
      </div>
      <div className="mt-6 space-y-2 sm:hidden sm:space-y-0">
        <MultiSelectBox
          handleSelect={(value) => setSelectedNames(value)}
          placeholder="Select Salespeople"
          maxWidth="max-w-full"
        >
          {salesPeople.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <Dropdown
          maxWidth="max-w-full"
          defaultValue="all"
          handleSelect={(value) => setSelectedStatus(value)}
        >
          <DropdownItem value="all" text="All Performances" />
          <DropdownItem value="overperforming" text="Overperforming" />
          <DropdownItem value="average" text="Average" />
          <DropdownItem value="underperforming" text="Underperforming" />
        </Dropdown>
      </div>

      <Table marginTop="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">Leads</TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">
              Sales ($)
            </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">
              Quota ($)
            </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">
              Variance
            </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">Region</TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell textAlignment="text-right">{item.leads}</TableCell>
                <TableCell textAlignment="text-right">{item.sales}</TableCell>
                <TableCell textAlignment="text-right">{item.quota}</TableCell>
                <TableCell textAlignment="text-right">
                  {item.variance}
                </TableCell>
                <TableCell textAlignment="text-right">{item.region}</TableCell>
                <TableCell textAlignment="text-right">
                  <BadgeDelta
                    deltaType={item.deltaType}
                    text={item.status}
                    size="xs"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};
