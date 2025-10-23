import { RoundedCard } from "@/components/ui/rounded-card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export function HoldingsViewer() {
  const holdings = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$50,000",
      amount: "0.5",
      total: "$25,000",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Holdings</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Total Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((h, i) => (
              <TableRow key={i}>
                <TableCell>{h.name}</TableCell>
                <TableCell>{h.symbol}</TableCell>
                <TableCell>{h.price}</TableCell>
                <TableCell>{h.amount}</TableCell>
                <TableCell>{h.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RoundedCard>
    </div>
  );
}
