import { TradeViewer } from "@/components/trade-viewer";
import { Header } from "@/components/header";

export default function TradesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TradeViewer />
      </main>
    </div>
  );
}
