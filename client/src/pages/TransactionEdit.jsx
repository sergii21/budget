import { useRouteLoaderData, json, redirect } from "react-router-dom";
import PageContent from "../components/PageContent";
import TransactionForm from "../components/transaction/TransactionForm";
import { BASE_URL } from "../utils/helper";

export default function TransactionEdit() {
  const transaction = useRouteLoaderData("transaction-detail");
  const pageTitle = `Edit ${transaction.name} transaction details`;

  return (
    <PageContent title={pageTitle}>
      <TransactionForm transaction={transaction}></TransactionForm>
    </PageContent>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  let url = `${BASE_URL}transactions`;

  if (method === "PUT") {
    const transactionId = params.transactionId;
    url += `/${transactionId}`;
  }

  const transactionData = {
    amount: +data.get("amount"),
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(transactionData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Can't save transaction", status: 500 });
  }

  if (method === "PUT") {
    return redirect('/');
  } else {
    return { message: "Succcessfuly saved.", isSuccess: true };
   }
}
