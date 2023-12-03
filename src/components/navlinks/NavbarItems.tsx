import NavLinkItem from "./NavLinkItem";
import { navLinkData } from "mock/navLinkData";

const NavbarItems = () => {
  return (
    <nav className="flex flex-col gap-10 m-auto group pl-3">
      {navLinkData.map(({ path, iconName, label }) => (
        <NavLinkItem path={path} key={path} iconName={iconName} label={label} />
      ))}
    </nav>
  );
};

export default NavbarItems;
