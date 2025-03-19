import UserHeader from "../components/Header/UserHeader.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <div>
      <UserHeader />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default User;
