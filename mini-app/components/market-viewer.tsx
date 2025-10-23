"use client";

import { RoundedCard } from "@/components/ui/rounded-card";

export function MarketViewer() {
  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Live Market Prices</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">24h Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Bitcoin</td>
              <td className="px-4 py-2">BTC</td>
              <td className="px-4 py-2">$50,000</td>
              <td className="px-4 py-2 text-green-500">+2.5%</td>
            </tr>
          </tbody>
        </table>
      </RoundedCard>
    </div>
  );
}
