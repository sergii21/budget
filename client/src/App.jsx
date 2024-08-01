import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/RootLayout";

import HomePage from "./pages/Home";
import BudgetPage from "./pages/Budget";
import PlannedSpentsPage from "./pages/PlannedSpents";
import ErrorPage from "./pages/Error";
import TransactionDetail from "./pages/TransactionDetail";
import TransactionEdit from "./pages/TransactionEdit";

import { action as budgetAction } from "./pages/Budget";
import {
  loader as transactionDetailLoader,
  action as deleteTransactionAction,
} from "./pages/TransactionDetail";
import { action as editTransactionAction } from "./pages/TransactionEdit";
import BudgetContextProvider from "./store/budgetContext";
import TransactionContextProvider from "./store/transactionContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
      },
    ],
  },
]);

function App() {
  return (
    <BudgetContextProvider>
      <TransactionContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </TransactionContextProvider>
    </BudgetContextProvider>
  );
}

export default App;
