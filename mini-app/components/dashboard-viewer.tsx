"use client";

import { RoundedCard } from "@/components/ui/rounded-card";
import { LineChart, PieChart } from "@/components/ui/chart";

export function DashboardViewer() {
  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Total Portfolio Value</h2>
        <p className="text-3xl font-bold">$12,345.67</p>
      </RoundedCard>
      <RoundedCard>
        <h3 className="text-lg font-medium mb-2">Profit / Loss</h3>
        <LineChart data={[]} />
      </RoundedCard>
      <RoundedCard>
        <h3 className="text-lg font-medium mb-2">Asset Distribution</h3>
        <PieChart data={[]} />
      </RoundedCard>
    </div>
  );
}
