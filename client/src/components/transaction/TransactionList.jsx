import { Link } from "react-router-dom";

import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions }) {
  return (
    <>
      {transactions.map((t) => (
        <Link key={t._id} to={"/transactions/" + t._id}>
          <TransactionItem {...t}></TransactionItem>
        </Link>
      ))}
    </>
  );
}
