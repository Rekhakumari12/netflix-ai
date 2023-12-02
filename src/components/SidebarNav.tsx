import logo from "../assets/logo.svg";
import NavbarItems from "./NavbarItems";

const SidebarNav = () => {
  return (
    <aside className="fixed flex flex-col gap-5 bg-gradient-to-r from-black px-5 justify-between h-screen">
      <img src={logo} alt="hotstar-logo" className="py-10" width={60} />
      <NavbarItems />
    </aside>
  );
};

export default SidebarNav;
