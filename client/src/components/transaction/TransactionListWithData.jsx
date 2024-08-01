import SearchableList from "../ui/SearchableList";
import Awaited from "../ui/Awaited";
import TransactionList from "./TransactionList";
import {useTransaction} from '../../store/transactionContext'

export default function TransactionListWithData(props) {
const { transactions } = useTransaction();
  
  function filterTransactions(transaction, searchTerm) {
    return JSON.stringify(transaction)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  }

  return (
    <Awaited data={transactions}>
      {(loadedTransactions) => (
        <SearchableList
          className="mb-3"
          items={loadedTransactions}
          filterFn={filterTransactions}
        >
          {(filteredTransactions) =>
            <TransactionList transactions={filteredTransactions} {...props} />
          }
        </SearchableList>
      )}
    </Awaited>
  );
}
