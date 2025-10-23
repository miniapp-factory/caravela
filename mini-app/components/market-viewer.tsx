import { RoundedCard } from "@/components/ui/rounded-card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export function MarketViewer() {
  const marketData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$50,000",
      change: "+2.5%",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Live Market Prices</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((m, i) => (
              <TableRow key={i}>
                <TableCell>{m.name}</TableCell>
                <TableCell>{m.symbol}</TableCell>
                <TableCell>{m.price}</TableCell>
                <TableCell
                  className={
                    m.change.startsWith("-") ? "text-destructive" : "text-green-500"
                  }
                >
                  {m.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RoundedCard>
    </div>
  );
}
