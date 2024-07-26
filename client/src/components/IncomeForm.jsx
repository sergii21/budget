import classes from "./ui/form/form.module.css";

import {Form, json, redirect} from 'react-router-dom';

function IncomeForm() {
  function cancelHandler() {}

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="amount">Income amount</label>
        <input id="amount" type="number" name="amount" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default IncomeForm;

export async function action({ request }) {
  const data = await request.formData();

  const incomeData = {income: data.get('amount')};

  const response = await fetch("http://localhost:3000/income", {
    method: "POST",
    body: JSON.stringify(incomeData),
  });

  // if (!response.ok) {
  //   throw json({message: 'Could not save income.', status: 500})
  // }

  return redirect('/');
}
