
export default function TransactionItemContent({ description, amount }) {
  return (
      <div className="flex justify-between p-4 leading-normal">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {amount}
        </h5>
      </div>
  );
}
