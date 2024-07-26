import classes from './pageContent.module.css';

export default function PageContent({ title, children }) {
  return (
    <>
      {title && <h1 className={classes.h1}>{title}</h1>}
      {children}
    </>
  );
}
