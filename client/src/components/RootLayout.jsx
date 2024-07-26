import { Outlet, useNavigation } from "react-router-dom";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <main className="mt-4">
        {navigation.state === "loading" && "Loading..."}
        <Outlet />
      </main>
    </>
  );
}
