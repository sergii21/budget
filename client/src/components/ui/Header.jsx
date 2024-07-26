import classes from "./header.module.css";

export default function Header({ children }) {
  return (
    <header className={classes.header}>
      <h3>{children}</h3>
    </header>
  );
}
