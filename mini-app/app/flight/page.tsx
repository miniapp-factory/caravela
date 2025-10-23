import { FlightViewer } from "@/components/flight-viewer";

export default function FlightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky flex place-items-center gap-4 border-b p-4">
        <h1 className="text-2xl font-semibold">Flight Radar</h1>
      </header>
      <main className="flex-1 p-4">
        <FlightViewer />
      </main>
    </div>
  );
}
