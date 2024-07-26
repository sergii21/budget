import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import SearchableList from "../ui/SearchableList";
import { BASE_URL } from "../../utils/helper";
import { defer, json } from "react-router-dom";
import { transactionTypes } from "./transactionTypes";

export default function TransactionListWithData({ TransactionList }) {
  const { transactions } = useLoaderData();

  function filterTransactions(transaction, searchTerm) {
    return JSON.stringify(transaction)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={transactions}>
        {(loadedTransactions) => (
          <SearchableList
            className="mb-2 bg-root pl-4"
            items={loadedTransactions}
            filterFn={filterTransactions}
          >
            {(filteredTransactions) => (
              <TransactionList transactions={filteredTransactions} />
            )}
          </SearchableList>
        )}
      </Await>
    </Suspense>
  );
}

async function loadTransactions(transactionType) {
  const transactionTypeParam = transactionType
    ? `?type=${transactionType}`
    : "";

  const response = await fetch(
    `${BASE_URL}transactions${transactionTypeParam}`
  );

  if (!response.ok) {
    throw json({ message: "Can't load transactions.", status: 500 });
  } else {
    return await response.json();
  }
}

export function loader({ request }) {
  const [, planned] = transactionTypes;
  const type = request.url.includes("planned-spents") && planned;

  return defer({
    transactions: loadTransactions(type),
  });
}
