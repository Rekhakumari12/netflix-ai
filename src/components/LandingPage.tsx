import { Outlet } from "react-router-dom";
import FeaturedMovies from "./FeaturedMovies";
import MoviesContainer from "./MoviesContainer";

const LandingPage = () => {
  return (
    <div className="">
      <Outlet />
      <FeaturedMovies />
      <MoviesContainer />
    </div>
  );
};

export default LandingPage;
