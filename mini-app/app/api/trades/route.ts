import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const tokenAddress = "0xA66B448f97CBf58D12f00711C02bAC2d9EAC6f7f";
  const dexScreenerUrl = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;

  try {
    const res = await fetch(dexScreenerUrl);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data from DexScreener" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();

    // DexScreener returns an array of pairs; each pair may contain a tradeHistory array.
    // We'll aggregate all trade histories from all pairs.
    const trades: Array<{
      timestamp: number;
      price: string;
      amount: string;
      side: "buy" | "sell";
    }> = [];

    if (Array.isArray(data.pairs)) {
      data.pairs.forEach((pair: any) => {
        if (Array.isArray(pair.tradeHistory)) {
          pair.tradeHistory.forEach((trade: any) => {
            // DexScreener trade objects typically contain: timestamp, price, amount, side
            trades.push({
              timestamp: trade.timestamp,
              price: trade.price,
              amount: trade.amount,
              side: trade.side,
            });
          });
        }
      });
    }

    // Sort trades by timestamp descending
    trades.sort((a, b) => b.timestamp - a.timestamp);

    return new Response(JSON.stringify({ trades }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
