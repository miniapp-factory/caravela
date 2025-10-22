import { PortfolioViewer } from "@/components/portfolio-viewer";
import { Header } from "@/components/header";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PortfolioViewer />
      </main>
    </div>
  );
}
