import LandingPage from "components/LandingPage";
import SidebarNav from "components/SidebarNav";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/in")
      navigate("/in/home");
  }, [location.pathname, navigate]);

  return (
    <>
      <SidebarNav />
      <LandingPage />
    </>
  );
};

export default Main;
