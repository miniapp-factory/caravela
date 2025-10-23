"use client";

import { RoundedCard } from "@/components/ui/rounded-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { ApiKeyManager } from "@/components/ui/api-key-manager";

export function SettingsViewer() {
  return (
    <div className="p-4 space-y-4">
      <RoundedCard>
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="space-y-4">
          <ThemeToggle />
          <CurrencySelector />
          <ApiKeyManager />
        </div>
      </RoundedCard>
    </div>
  );
}
