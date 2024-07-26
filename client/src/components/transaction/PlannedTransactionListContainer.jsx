import PlannedTransactionList from "./PlannedTransactionList";
import TransactionListWithData from './TransactionListWithData';

export default function PlannedTransactionListContainer() {
  return <TransactionListWithData TransactionList={PlannedTransactionList} />;
}
