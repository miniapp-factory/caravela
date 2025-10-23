"use client";

import { useState } from "react";

export function CurrencySelector() {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "BRL">("USD");

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as any)}
      className="border rounded p-2"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BRL">BRL</option>
    </select>
  );
}
