import PageContent from "../components/PageContent";
import { BASE_URL } from "../utils/helper";
import {
  json,
  useRouteLoaderData,
  Link,
  redirect,
  useSubmit,
} from "react-router-dom";

export default function TransactionDetail() {
  const transaction = useRouteLoaderData("transaction-detail");
  const submit = useSubmit();
  const pageTitle = `${transaction.name} transaction details`;

  function deleteHandler() {
    const procced = confirm("Are you sure?");

    if (procced) {
      submit(null, {method:'delete'});
    }
  }

  return (
    <PageContent title={pageTitle}>
      {name}
      <Link to={"edit"}>edit</Link>
      <button onClick={deleteHandler}>Delete</button>
    </PageContent>
  );
}

export async function loader({ params }) {
  const { transactionId } = params;
  const response = await fetch(BASE_URL + "transactions/" + transactionId);

  if (!response.ok) {
    throw json({ message: "Can't load transaction details.", status: 500 });
  } else {
    return response;
  }
}

export async function action({ params }) {
  const { transactionId } = params;
  const response = await fetch(BASE_URL + "transactions/" + transactionId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Can't delete transaction.", status: 500 });
  } else {
    return redirect("/");
  }
}
