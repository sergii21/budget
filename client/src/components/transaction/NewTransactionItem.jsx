import Button from "../ui/button/Button";
import Input from "../ui/form/Input";
import Card from "../ui/Card";
import { useBudget } from "../../store/budgetContext";
import { useRef } from "react";
import { useTransaction } from "../../store/transactionContext";

export default function NewTransactionItem({ type= 'casual', ...props }) {
  const category = useRef();
  const amount = useRef();

  const { balance, updateBudget } = useBudget();
  const { addTransaction } = useTransaction();

  function handleSubmit(event) {
    event.preventDefault();
    const newBalance = balance - +amount.current.value;
    updateBudget({ balance: newBalance });
    addTransaction({
      amount: +amount.current.value,
      description: category.current.value,
      name: category.current.value,
      type,
    });
    amount.current.value = '';
    category.current.value = "";
  }
  return (
    <Card {...props} className="mb-3">
      <form onSubmit={handleSubmit} className="flex justify-between p-4 gap-4">
        <Input
          ref={category}
          label="Category"
          type="text"
          name="description"
        ></Input>
        <Input ref={amount} label="Amount" type="number" name="amount"></Input>
        <Button type="submit" className="self-end">
          Save
        </Button>
      </form>
    </Card>
  );
}
