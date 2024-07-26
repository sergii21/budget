import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/RootLayout";

import HomePage from "./pages/Home";
import BudgetPage from "./pages/Budget";
import PlannedSpentsPage from "./pages/PlannedSpents";
import ErrorPage from "./pages/Error";
import TransactionDetail from "./pages/TransactionDetail";
import TransactionEdit from "./pages/TransactionEdit";

import { loader as transactionsLoader } from "./components/transaction/TransactionListWithData";
import {
  action as budgetAction,
  loader as currentBudgetLoader,
} from "./pages/Budget";
import {
  loader as transactionDetailLoader,
  action as deleteTransactionAction,
} from "./pages/TransactionDetail"; 
import { action as editTransactionAction } from "./pages/TransactionEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: currentBudgetLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: transactionsLoader,
        action: editTransactionAction,
      },
      {
        path: "transactions/:transactionId/",
        id: "transaction-detail",
        loader: transactionDetailLoader,
        children: [
          {
            index: true,
            element: <TransactionDetail />,
            action: deleteTransactionAction,
          },
          {
            path: "edit",
            element: <TransactionEdit />,
            action: editTransactionAction,
          },
        ],
      },
      {
        path: "budget",
        element: <BudgetPage />,
        action: budgetAction,
      },
      {
        path: "planned-spents",
        element: <PlannedSpentsPage />,
        loader: transactionsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
