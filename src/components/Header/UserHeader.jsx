import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true }); // Navigate to home first

      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 50); // Delay scrolling to ensure page loads
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-screen bg-white dark:bg-gray-500 p-4 pr-7 shadow flex justify-between z-50">
      <div>
        <span
          className="mr-4 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          Home
        </span>
        <span
          className="mr-4 cursor-pointer"
          onClick={() => handleNavClick("event")}
        >
          Event
        </span>
        <span
          className="mr-4 cursor-pointer"
          onClick={() => handleNavClick("about")}
        >
          About
        </span>
      </div>

      <div>
        <RouterLink to="/competition" className="mr-4">
          Competition
        </RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
      </div>
    </nav>
  );
};

export default UserHeader;
