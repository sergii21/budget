import { useEffect } from "react";

export default function BalanceMonth() {
  useEffect(() => {
    fetch("http://localhost:3000");
  }, []);

  return <div>BalanceMonth</div>;
}
