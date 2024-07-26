import { Link } from "react-router-dom";

export default function PlannedTransactionList({ transactions }) {
  const transactionsView = transactions.map((t) => {
    return (
      <tr key={t._id}>
        <td>{t.date}</td>
        <td>
          <Link to={"/transactions/" + t._id}>{t.name}</Link>
        </td>
        <td>{t.amount}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Date1</th> 
          <th>Description</th>
          <th>Spent</th>
        </tr>
      </thead>
      <tbody>{transactionsView}</tbody>
    </table>
  );
}
