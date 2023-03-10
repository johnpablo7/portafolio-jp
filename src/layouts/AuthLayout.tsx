import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
