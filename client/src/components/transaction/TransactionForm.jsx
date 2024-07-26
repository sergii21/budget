import { Form } from "react-router-dom";
import classes from "../ui/form/form.module.css";

import { transactionTypes } from "./transactionTypes";

function TransactionForm({transaction}) {
  function cancelHandler() {
  }

  const [casual, planned] = transactionTypes;

  return (
    <Form method="put" className={classes.form}>
      <p>
        <label htmlFor="amount">Spent amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          required
          defaultValue={transaction.amount}
        />
      </p>
      <p>
        <label htmlFor="type">Type</label>
        <select id="type" name="type" required>
          <option value={planned}>Planned</option>
          <option value={casual}>Casual</option>
        </select>
      </p>
      {/* <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p> */}
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required defaultValue={transaction.name} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={transaction.description}
        />
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

export default TransactionForm;
