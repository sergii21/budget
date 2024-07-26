import Card from "../ui/Card";

const defaultChildren = (description,amount) => <div className="flex justify-between p-4 leading-normal">
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {description}
  </p>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {amount}
  </h5>
</div>;

export default function TransactionItem({
  description,
  amount,
  children = defaultChildren(description, amount),
}) {
  return (
    <Card className="mb-4">
      <img
        className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/docs/images/blog/image-4.jpg"
        alt=""
      ></img>
      {children}
    </Card>
  );
}
