import { Header } from "@/components/header";
import { TransactionForm } from "@/components/transaction-form";

export default function AddTransactionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TransactionForm />
      </main>
    </div>
  );
}
