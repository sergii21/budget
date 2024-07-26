import CurrentMonthBudget from "../components/budget/CurrentMonthBudget";
import NewTransactionItem from "../components/transaction/NewTransactionItem";
import TransactionListContainer from '../components/transaction/TransactionListContainer';

export default function HomePage() {
  return (
    <>
      <CurrentMonthBudget></CurrentMonthBudget>

      <NewTransactionItem />
      
      <TransactionListContainer/>
    </>
  );
}
