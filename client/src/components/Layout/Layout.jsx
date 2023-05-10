import { Outlet } from "react-router-dom";

import Navbar from "../Navbaar/Navbar";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
