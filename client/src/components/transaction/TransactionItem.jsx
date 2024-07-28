import Card from "../ui/Card";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const defaultChildren = (description, amount) => (
  <div className="p-2 pr-3">
    <div className="flex items-center ">
      <div className="flex-shrink-0 w-14 h-14 bg-slate-200 dark:bg-slate-700 p-3 rounded-xl">
        <ShoppingBagIcon className="text-slate-400 dark:text-slate-500"></ShoppingBagIcon>
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium truncate">
          {description}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {new Date().toLocaleDateString()}
        </p>
      </div>
      <div className="inline-flex items-center font-semibold">
        UAH {amount}
      </div>
    </div>
  </div>
);

export default function TransactionItem({
  description,
  amount,
  children = defaultChildren(description, amount),
}) {
  return <Card className="mb-4">{children}</Card>;
}
