import type { NextRequest } from "next/server";

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

export async function GET() {
  // For demo purposes we return a static set of flights.
  // In a real app you would fetch from a flight data provider such as OpenSky Network.
  const flights: Flight[] = [
    {
      icao24: "a1b2c3",
      callsign: "DAL123",
      origin_country: "United States",
      time_position: 1690000000,
      last_contact: 1690000300,
      longitude: -122.4194,
      latitude: 37.7749,
      baro_altitude: 12000,
      velocity: 250,
      heading: 90,
    },
    {
      icao24: "d4e5f6",
      callsign: "BAW456",
      origin_country: "United Kingdom",
      time_position: 1690000100,
      last_contact: 1690000400,
      longitude: -0.1278,
      latitude: 51.5074,
      baro_altitude: 15000,
      velocity: 280,
      heading: 270,
    },
  ];

  return new Response(JSON.stringify({ flights }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
