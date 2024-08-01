import { useTransaction } from "../../store/transactionContext";
import PlannedTarnsactionItem from "./PlannedTarnsactionItem";
import TransactionItem from "./TransactionItem";
import TransactionList from "./TransactionList";

export default function TransactionListContainer({ type = 'casual' }) {
  const { transactions } = useTransaction();
  const filteredTransactions = transactions.filter((t) => t.type === type);
  const transactionItem =
    type === "planned" ? PlannedTarnsactionItem : TransactionItem;
  
  return (
      <TransactionList
        transactions={filteredTransactions}
        TransactionItem={transactionItem}
      />
  );
}
