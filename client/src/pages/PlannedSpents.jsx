import PlannedTransactionListContainer from "../components/transaction/PlannedTransactionListContainer";
import PlannedTransactionForm from "../components/transaction/PlannedTrasactionForm";
import Header from "../components/ui/Header";

export default function PlannedSpentsPage() {
  return (
    <>
      <Header>Enter planned spents</Header>

      <PlannedTransactionForm />

      <PlannedTransactionListContainer/>
    </>
  );
}
