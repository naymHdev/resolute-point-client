import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
