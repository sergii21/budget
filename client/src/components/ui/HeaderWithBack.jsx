import Header from "./Header";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function HeaderWithBack({ children }) {
  const left = <ArrowLeftIcon className="size-6"></ArrowLeftIcon>;
  return <Header left={left}>{children}</Header>;
}
