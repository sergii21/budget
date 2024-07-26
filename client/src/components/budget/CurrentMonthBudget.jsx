import { Link, useRouteLoaderData } from "react-router-dom";
import { getCurrentDate } from "../../utils/date";
import AvailableBudget from "./AvailableBudget";

export default function CurrentMonthBudget() {
  const data = useRouteLoaderData('root');
  const { month } = getCurrentDate();
  const progress = (data?.balance * 100) / data?.budget;

  return (
    <Link to={"/budget"}>
      <AvailableBudget month={month} budget={data?.balance} progress={progress}></AvailableBudget>
    </Link>
  );
}
