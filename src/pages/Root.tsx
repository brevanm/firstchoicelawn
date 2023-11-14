import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SnackBarProvider from "../components/SnackBarProvider";

const Root = () => {
  return (
    <SnackBarProvider>
      <NavBar />
      <Outlet />
    </SnackBarProvider>
  );
};

export default Root;
