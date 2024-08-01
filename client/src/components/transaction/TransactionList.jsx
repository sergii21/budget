import { Link } from "react-router-dom";
import Card from "../ui/Card";

export default function TransactionList({ transactions, TransactionItem }) {

  return (
    <Card className="mb-3">
      {transactions.map((t) => (
        <Link key={t._id} to={"/transactions/" + t._id}>
          <TransactionItem className="p-2 pr-3" {...t}></TransactionItem>
        </Link>
      ))}
    </Card>
  );
}
