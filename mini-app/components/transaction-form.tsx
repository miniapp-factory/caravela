"use client";

import { RoundedCard } from "@/components/ui/rounded-card";
import { DatePicker } from "@/components/ui/date-picker";
import { NumberInput } from "@/components/ui/number-input";
import { useState } from "react";

export function TransactionForm() {
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [side, setSide] = useState<"buy" | "sell">("buy");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ date, amount, price, side });
  };

  return (
    <RoundedCard>
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Date</label>
          <DatePicker value={date} onChange={setDate} />
        </div>
        <div>
          <label className="block mb-1">Side</label>
          <select
            value={side}
            onChange={(e) => setSide(e.target.value as "buy" | "sell")}
            className="w-full border rounded p-2"
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Amount</label>
          <NumberInput value={amount} onChange={setAmount} />
        </div>
        <div>
          <label className="block mb-1">Price (USD)</label>
          <NumberInput value={price} onChange={setPrice} />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          Submit
        </button>
      </form>
    </RoundedCard>
  );
}
