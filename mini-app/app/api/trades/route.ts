import type { NextRequest } from "next/server";

interface Trade {
  timestamp: number;
  price: string;
  amount: string;
  side: "buy" | "sell";
}

interface DexScreenerPair {
  tradeHistory?: Trade[];
}

interface DexScreenerResponse {
  pairs: DexScreenerPair[];
}

export async function GET() {
  const tokenAddress = "0xA66B448f97CBf58D12f00711C02bAC2d9EAC6f7f";
  const dexScreenerUrl = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;

  try {
    const res = await fetch(dexScreenerUrl);
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch data from DexScreener" }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data: DexScreenerResponse = await res.json();

    const trades: Trade[] = [];

    if (Array.isArray(data.pairs)) {
      data.pairs.forEach((pair) => {
        if (Array.isArray(pair.tradeHistory)) {
          pair.tradeHistory.forEach((trade) => {
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

    trades.sort((a, b) => b.timestamp - a.timestamp);

    return new Response(JSON.stringify({ trades }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown error while fetching trades";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
