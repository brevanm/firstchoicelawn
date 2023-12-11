import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SnackBarProvider from "../components/SnackBarProvider";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <SnackBarProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </SnackBarProvider>
  );
};

export default Root;
