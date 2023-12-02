import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NavbarItems = () => {
  return (
    <nav className="flex flex-col gap-10 m-auto group ">
      <NavLink
        to={"/in/mypage"}
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text-slate-200" : "text-slate-500",
            // isTransitioning ? "transitioning" : "", -- TODO
          ].join("flex ")
        }
        end
      >
        <Icon name={"profile"} />
        <span className="invisible group-hover:visible">My Space</span>
      </NavLink>
      <NavLink to={"/in/explore"} className="flex" end>
        <Icon name={"search"} />
        <span className="invisible group-hover:visible">Search</span>
      </NavLink>
      <NavLink to={"/in/home"} className="flex" end>
        <Icon name={"home"} />
        <span className="invisible group-hover:visible">Home</span>
      </NavLink>
      <NavLink to={"/in/movies"} className="flex" end>
        <Icon name={"movies"} />
        <span className="invisible group-hover:visible">Movies</span>
      </NavLink>
    </nav>
  );
};

export default NavbarItems;
