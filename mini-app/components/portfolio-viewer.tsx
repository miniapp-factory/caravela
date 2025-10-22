"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

const WALLET_ADDRESS = "0x3D322b32FBb27B6c2dfBe7906300781F425dc301";

export function PortfolioViewer() {
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
        const bal = await provider.getBalance(WALLET_ADDRESS);
        setBalance(ethers.formatEther(bal));
      } catch (err: any) {
        setError(err.message || "Failed to fetch balance");
      } finally {
        setLoading(false);
      }
    }
    fetchBalance();
  }, []);

  if (loading) {
    return <div className="p-4">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="p-4 text-destructive">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Portfolio Viewer</h2>
      <p>
        <strong>Wallet Address:</strong> {WALLET_ADDRESS}
      </p>
      <p>
        <strong>ETH Balance:</strong> {balance} ETH
      </p>
      {/* Placeholder for token list or other assets */}
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-2">Tokens (placeholder)</h3>
        <p>No token data available in this demo.</p>
      </div>
    </div>
  );
}
