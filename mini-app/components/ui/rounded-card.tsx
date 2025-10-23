"use client";

export function RoundedCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-card text-card-foreground rounded-xl shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
}
