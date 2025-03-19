import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Landing;
