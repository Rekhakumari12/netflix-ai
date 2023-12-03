import Icon from "components/Icon";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ICON_TYPES } from "types/type";
type propType = {
  path: string;
  iconName: ICON_TYPES;
  label: string;
};
const NavLinkItem = (props: propType) => {
  const { path, iconName, label } = props;
  const [active, setActive] = useState(false);
  const getClasses = (isActive: boolean, isTransitioning: boolean): string =>
    [
      isActive ? "text-slate-200" : "text-slate-500",
      isTransitioning ? "transitioning" : "", //todo
    ].join(" flex items-center w-32 h-10");

  return (
    <NavLink
      to={path}
      className={({ isActive, isTransitioning }) => {
        setActive(isActive);
        return getClasses(isActive, isTransitioning);
      }}
      end
    >
      <Icon
        name={iconName}
        color={active ? "var(--brand-white)" : "var(--brand-grey)"}
      />
      <span className="hidden group-hover:block capitalize ml-2">{label}</span>
    </NavLink>
  );
};

export default NavLinkItem;
