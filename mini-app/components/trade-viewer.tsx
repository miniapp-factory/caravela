"use client";

import { useEffect, useState } from "react";

interface Trade {
  timestamp: number;
  price: string;
  amount: string;
  side: "buy" | "sell";
}

export function TradeViewer() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrades() {
      try {
        const res = await fetch("/api/trades");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: { trades: Trade[] } = await res.json();
        setTrades(data.trades);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Failed to fetch trades";
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchTrades();
  }, []);

  if (loading) {
    return <div className="p-4">Loading trades...</div>;
  }

  if (error) {
    return <div className="p-4 text-destructive">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Trade History for 0xA66B448f97CBf58D12f00711C02bAC2d9EAC6f7f
      </h2>
      {trades.length === 0 ? (
        <p>No trades found.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Side</th>
              <th className="border px-4 py-2">Price (ETH)</th>
              <th className="border px-4 py-2">Amount (Token)</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">
                  {new Date(t.timestamp * 1000).toLocaleString()}
                </td>
                <td className="border px-4 py-2">{t.side}</td>
                <td className="border px-4 py-2">{t.price}</td>
                <td className="border px-4 py-2">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
