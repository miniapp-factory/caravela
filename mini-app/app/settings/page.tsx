import { Header } from "@/components/header";
import { SettingsViewer } from "@/components/settings-viewer";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SettingsViewer />
      </main>
    </div>
  );
}
