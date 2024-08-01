import Budget from "../components/budget/Budget";
import NewTransactionItem from "../components/transaction/NewTransactionItem";
import TransactionListContainer from "../components/transaction/TransactionListContainer";
import Header from "../components/ui/Header";
import SectionHeader from "../components/ui/SectionHeader";

export default function PlannedSpentsPage() {
  return (
    <>
      <Header>Enter planned spents</Header>

      <Budget></Budget>

      <NewTransactionItem type={"planned"} />

      <SectionHeader>Planned transactions</SectionHeader>
      <TransactionListContainer type={"planned"} />
    </>
  );
}
