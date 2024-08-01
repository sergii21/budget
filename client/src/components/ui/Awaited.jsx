import { Suspense } from "react";
import { Await } from "react-router-dom";
import Spinner from "./Spinner";

export default function Awaited({data, children }) {
  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Await resolve={data}>{children}</Await>
    </Suspense>
  );
}
