import { Link } from "react-router-dom";
import { getCurrentDate } from "../../utils/date";
import { useBudget } from "../../store/budgetContext";
import Progress from "../ui/Progress";
import Card from "../ui/Card";

export default function Budget() {
  const { balance, progress } = useBudget();

  const { month } = getCurrentDate();

  return (
    <Link to={"/budget"}>
      <Card className="mb-4 p-4">
        <div className="flex justify-between mb-3">
          Budget for {month}
          <h3 className="font-semibold">&#x20B4; {balance}</h3>
        </div>
        <Progress value={progress} max="100"></Progress>
      </Card>
    </Link>
  );
}
