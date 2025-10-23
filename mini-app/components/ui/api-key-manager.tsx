"use client";

import { useState } from "react";

export function ApiKeyManager() {
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="space-y-2">
      <label className="block">API Key</label>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <button className="bg-primary text-white py-1 px-3 rounded">Save</button>
    </div>
  );
}
