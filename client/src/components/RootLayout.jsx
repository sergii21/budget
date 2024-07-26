import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from './navigation/MainNavigation';

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <main className="m-4">
        <MainNavigation></MainNavigation>
        {navigation.state === "loading" && "Loading..."}
        <Outlet />
      </main>
    </>
  );
}
