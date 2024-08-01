import Button from "../ui/button/Button";
import TransactionItem from "./TransactionItem";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function PlannedTarnsactionItem(props) {
  return (
    <TransactionItem {...props}>
      <Button className="ml-3">
        <CheckIcon className="w-5 h-5" />
      </Button>
    </TransactionItem>
  );
}
