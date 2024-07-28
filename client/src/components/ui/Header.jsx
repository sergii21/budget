import classes from "./header.module.css";

export default function Header({ left, children, right }) {
  return (
    <header className={classes.header + " pb-4 flex"}>
      <div className="flex-1">{left}</div>
      <h3>{children}</h3>
      <div className="flex-1">{right}</div>
    </header>
  );
}
