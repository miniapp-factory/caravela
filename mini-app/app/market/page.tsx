import { Header } from "@/components/header";
import { MarketViewer } from "@/components/market-viewer";

export default function MarketPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MarketViewer />
      </main>
    </div>
  );
}
