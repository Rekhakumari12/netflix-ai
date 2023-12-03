import logo from "../assets/logo.svg";
import NavbarItems from "./navlinks/NavbarItems";

const SidebarNav = () => {
  return (
    <>
      <img
        src={logo}
        alt="hotstar-logo"
        className="py-10 px-5 absolute z-10 cursor-pointer"
        width={100}
      />
      <aside className="fixed flex flex-col gap-5 bg-gradient-to-r from-black px-5 justify-between h-screen">
        <NavbarItems />
      </aside>
    </>
  );
};

export default SidebarNav;
