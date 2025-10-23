import { RoundedCard } from "@/components/ui/rounded-card";
import { LineChart, PieChart } from "@/components/ui/chart";

export function DashboardViewer() {
  const totalValue = "$12,345.67";
  const profitLossData = []; // placeholder data
  const assetDistributionData = []; // placeholder data

  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Total Portfolio Value</h2>
        <p className="text-3xl font-bold">{totalValue}</p>
      </RoundedCard>
      <RoundedCard>
        <h3 className="text-lg font-medium mb-2">Profit / Loss</h3>
        <LineChart data={profitLossData} />
      </RoundedCard>
      <RoundedCard>
        <h3 className="text-lg font-medium mb-2">Asset Distribution</h3>
        <PieChart data={assetDistributionData} />
      </RoundedCard>
    </div>
  );
}
