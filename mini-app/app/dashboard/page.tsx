import { Header } from "@/components/header";
import { DashboardViewer } from "@/components/dashboard-viewer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DashboardViewer />
      </main>
    </div>
  );
}
