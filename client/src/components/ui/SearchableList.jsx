import { useRef, useState } from "react";

import classes from './form/form.module.css'

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
    }, 500);
  }
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className={className +' '+classes.formInput}
        onChange={handleChange}
      />
      {children(searchResults)}
    </>
  );
}
