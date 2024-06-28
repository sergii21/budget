import Header from "../ui/Header";
import TransactionForm from "../features/TransactionForm";
import TransactionList from "../features/TransactionList";
import BalanceMonth from "../features/BalanceMonth";

export default function BalancePage() {
  return (
    <>
      <Header>Month balance</Header>

      <BalanceMonth></BalanceMonth>

      <TransactionForm></TransactionForm>

      <TransactionList></TransactionList>
    </>
  );
}
