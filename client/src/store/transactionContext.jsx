import { createContext, useContext, useEffect, useState } from "react";
// import { create, load } from "../storage/http";
import { create, load } from "../storage/localstorage";
import { v4 as uuid } from "uuid";

const ENTITY_NAME = "transactions";

const TransactionContext = createContext({
  transactions: [],
  addTransaction: () => {},
});

export default function TransactionContextProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const fetchedData = await load(ENTITY_NAME);
    setItems(fetchedData);
  }

  async function saveCreatedData(item) {
    try {
      await create(ENTITY_NAME, item);
    } catch (error) {
      setItems(items);
    }
  }

  function hendleAddItem(item) {
    const newItem = {...item, _id:uuid()}
    const newItems = [newItem, ...items];
    setItems(newItems);

    saveCreatedData(newItem);
  }

  const ctxValue = {
    transactions: items,
    addTransaction: hendleAddItem,
    loadTransactions: fetchData,
  };

  return (
    <TransactionContext.Provider value={ctxValue}>
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
