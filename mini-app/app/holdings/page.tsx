import { Header } from "@/components/header";
import { HoldingsViewer } from "@/components/holdings-viewer";

export default function HoldingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HoldingsViewer />
      </main>
    </div>
  );
}
