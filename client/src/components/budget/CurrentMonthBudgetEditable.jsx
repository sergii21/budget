import { useFetcher, useRouteLoaderData } from "react-router-dom";
import { getCurrentDate } from "../../utils/date";
import AvailableBudget from "./AvailableBudget";

export default function CurrentMonthBudgetEditable() {
  const data = useRouteLoaderData("root");
  const fetcher = useFetcher();
  const { month } = getCurrentDate();
  
  const budgetForm = (
    <fetcher.Form
      method="post"
      className="flex justify-between p-4 leading-normal"
    >
      <h5 className="ml-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <input type="number" name="budget" className="ml-4 mr-4 w-20" defaultValue={data?.balance} />
      </h5>
      <button>Save</button>
    </fetcher.Form>
  );

  return <AvailableBudget month={month} budget={budgetForm}></AvailableBudget>;
}
