import Card from "../ui/Card";
import Progress from "../ui/Progress";

export default function AvailableBudget({ month, budget, progress }) {
  return (
    <>
      <Card className="mb-4 p-4">
        <div className="flex justify-between mb-3">
          Budget for {month}
          <h3 className="font-semibold">UAH {budget}</h3>
        </div>
        <Progress value={progress} max="100"></Progress>
      </Card>
    </>
  );
}
