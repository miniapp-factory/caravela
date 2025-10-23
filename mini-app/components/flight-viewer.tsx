"use client";

import { useEffect, useState } from "react";

interface Flight {
  icao24: string;
  callsign: string;
  origin_country: string;
  time_position: number;
  last_contact: number;
  longitude: number;
  latitude: number;
  baro_altitude: number;
  velocity: number;
  heading: number;
}

export function FlightViewer() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFlights() {
      try {
        const res = await fetch("/api/flights");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setFlights(data.flights);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchFlights();
  }, []);

  if (loading) {
    return <div className="p-4">Loading flight data...</div>;
  }

  if (error) {
    return <div className="p-4 text-destructive">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Current Flights</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-muted">
            <th className="border px-2 py-1">Callsign</th>
            <th className="border px-2 py-1">Country</th>
            <th className="border px-2 py-1">Altitude (m)</th>
            <th className="border px-2 py-1">Speed (m/s)</th>
            <th className="border px-2 py-1">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.icao24} className="odd:bg-muted/50">
              <td className="border px-2 py-1">{f.callsign?.trim() || "N/A"}</td>
              <td className="border px-2 py-1">{f.origin_country}</td>
              <td className="border px-2 py-1">{f.baro_altitude?.toFixed(0) ?? "N/A"}</td>
              <td className="border px-2 py-1">{f.velocity?.toFixed(0) ?? "N/A"}</td>
              <td className="border px-2 py-1">
                {new Date(f.last_contact * 1000).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
