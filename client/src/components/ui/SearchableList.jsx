import { useRef, useState } from "react";
import Input from './form/Input';

export default function SearchableList({ items, children, filterFn, className }) {
  let lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) => filterFn(item, searchTerm));

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 200);
  }
  return (
    <>
      <Input
        type="search"
        placeholder="Search"
        className={className + " dark:bg-gray-800 border-0"}
        onChange={handleChange}
      ></Input>
      {children(searchResults)}
    </>
  );
}
