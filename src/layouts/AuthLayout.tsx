import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const AuthLayout = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
