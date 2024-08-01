import Budget from "../components/budget/Budget";
import NewTransactionItem from "../components/transaction/NewTransactionItem";
import TransactionListContainer from "../components/transaction/TransactionListContainer";
import SectionHeader from "../components/ui/SectionHeader";

export default function HomePage() {
  return (
    <>
      <Budget></Budget>

      <NewTransactionItem />

      <SectionHeader>Casula transactions</SectionHeader>
      <TransactionListContainer />
    </>
  );
}
