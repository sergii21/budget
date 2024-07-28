import { useFetcher } from "react-router-dom";

export default function TransactionItemEditableContent() {
  const fetcher = useFetcher();


  
  return (
    <fetcher.Form
      method="post"
      className="flex justify-between p-4 leading-normal"
    >
      <p className="w-2/3 font-normal text-gray-700 dark:text-gray-400">
        <input type="text" name="description" className="h-full w-full dark:bg-inherit dark:border-neutral-600 border rounded-md" />
      </p>
      <h5 className="ml-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <input type="number" name="amount" className="ml-4 mr-4 w-20 dark:bg-inherit dark:border-neutral-600 border rounded-md" />
      </h5>
      <button>Save</button>
    </fetcher.Form>
  );
}
