import { Calender } from "@/app/modules/mantine/calender";
import { UiCore } from "@/app/modules/mantine/ui-core";

export default async function MantinePage() {
  return (
    <div className="p-4">
      <UiCore />
      <Calender />
    </div>
  );
}
