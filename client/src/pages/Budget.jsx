import { BASE_URL } from "../utils/helper";
import BudgetForm from "../components/budget/BudgetForm";
import { redirect } from "react-router-dom";
import HeaderWithBack from "../components/ui/HeaderWithBack";
export default function IncomePage() {
  return (
    <>
      <HeaderWithBack>Budgets planner</HeaderWithBack>

      <BudgetForm></BudgetForm>
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const budget = { budget: data.get("budget") };

  const response = await fetch(BASE_URL + "balance", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(budget),
  });

  // if (!response.ok) {
  //   throw json({message: 'Could not save income.', status: 500})
  // }

  return redirect("/");
}
