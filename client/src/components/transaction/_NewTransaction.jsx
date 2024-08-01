import { useEffect } from "react";
import { useNavigation, useFetcher } from "react-router-dom";
import classes from "../ui/form/form.module.css";

export default function NewTransaction() {
  const navigation = useNavigation();
  const fetcher = useFetcher();

  const { data, state } = fetcher;
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      if (data.isSuccess) {
        window.alert(data.message);
      }
    }
  }, [data, state]);

  const validationErrorsView = data && data.errors && (
    <ul>
      {Object.values(data.errors).map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );

  function cancelHandler() {}

  return (
    <fetcher.Form method="post" className={classes.form}>
      {validationErrorsView}
      <p>
        <label htmlFor="amount">Spent amount</label>
        <input id="amount" type="number" name="amount" required />
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </fetcher.Form>
  );
}
