import { useRouteLoaderData, json } from "react-router-dom";

import classes from "./balance.module.css";
import { BASE_URL } from '../../utils/helper';

export default function balance() {
  const data = useRouteLoaderData("root");

  return (
    <div className={classes.title}>Current balance is {data?.balance}</div>
  );
} 

export async function loader() {
  const response = await fetch(BASE_URL + "balance");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch current balance." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
