import { getCurrentDate } from "../../utils/date";
import { useBudget } from "../../store/budgetContext";
import Input from "../ui/form/Input";
import Button from "../ui/button/Button";
import Card from "../ui/Card";
import Progress from "../ui/Progress";
import { useRef } from "react";

export default function BudgetForm() {
  const { balance, progress, setNewBudget } = useBudget();
  const input = useRef();

  const { month } = getCurrentDate();

  function handleSubmitForm(event) {
    event.preventDefault();
    setNewBudget(input.current.value);
  }

  return (
    <Card className="p-4">
      <form
        onSubmit={handleSubmitForm}
        className="flex justify-centern pb-4 gap-4"
      >
        <Input 
          ref={input}
          label={`Budget for ${month}`}
          type="number"
          name="budget"
          defaultValue={balance}
        ></Input>
        <Button type="submit" className="self-end">
          Save
        </Button>
      </form>
      {progress&&<Progress value={progress}></Progress>}
    </Card>
  );
}
