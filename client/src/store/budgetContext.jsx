import { createContext, useContext, useEffect, useState } from "react";
import {load, replace} from '../storage/localstorage'

const ENTITY_NAME = "balance";

const BudgetContext = createContext({
  budget: null,
  balance: null,
  updateBudget: () => {},
  setNewBudget: () => {},
});

export default function BudgetContextProvider({ children }) {
  const [budgetData, setBudgetData] = useState({
    budget: null,
    balance: null,
  });

  useEffect(() => {
    async function fetchData() {
      const budgetData = await load(ENTITY_NAME);
      setBudgetData(budgetData);
    }

    fetchData();
  }, []);

  async function saveUpdatedData(newBudgetData) {
    try {
      await replace(ENTITY_NAME, newBudgetData);
    } catch (error) {
      setBudgetData(budgetData);
    }
  }

  async function handleSetNewBudget(value) {
    const newBudgetData = { budget: value, balance: value };
    setBudgetData(newBudgetData);

    saveUpdatedData(newBudgetData);
  }

  async function handleUpdateBudget(update) {
    const newBudgetData = { ...budgetData, ...update };
    setBudgetData(newBudgetData);

    saveUpdatedData(newBudgetData);
  }

  const derivedProgress = (budgetData.balance * 100) / budgetData.budget;

  const ctxValue = {
    ...budgetData,
    progress: derivedProgress,
    updateBudget: handleUpdateBudget,
    setNewBudget: handleSetNewBudget,
  };
  return (
    <BudgetContext.Provider value={ctxValue}>{children}</BudgetContext.Provider>
  );
}

export const useBudget = () => useContext(BudgetContext);
