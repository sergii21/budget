import TransactionList from "./TransactionList";
import TransactionListWithData from './TransactionListWithData';

export default function TransactionListContainer() {
  return <TransactionListWithData TransactionList={TransactionList} />;
}
