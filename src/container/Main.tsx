// import LandingPage from "components/LandingPage";
import SidebarNav from "components/SidebarNav";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/in")
      navigate("/in/home");
  }, []);
  return (
    <div className="">
      <SidebarNav />
      <div className="flex">
        <iframe
          className="w-screen aspect-video hover:cursor-default"
          src="https://www.youtube-nocookie.com/embed/hXzcyx9V0xw?si=_1wAsRxjIz1PaIgr&controls=0&autoplay=1&mute=1&showinfo=0&rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {/* <LandingPage /> */}
      </div>
    </div>
  );
};

export default Main;
