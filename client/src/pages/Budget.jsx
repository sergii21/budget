import { BASE_URL } from "../utils/helper";
import Header from "../components/ui/Header";
import CurrentMonthBudgetEditable from "../components/budget/CurrentMonthBudgetEditable";
import { json, redirect } from 'react-router-dom';

export default function IncomePage() {
  return (
    <>
      <Header>Budgets planner</Header>

      <CurrentMonthBudgetEditable></CurrentMonthBudgetEditable>
    </>
  );
}


export async function loader() {
  const response = await fetch(BASE_URL + "balance");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch current balance." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
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

  return redirect('/');
}
