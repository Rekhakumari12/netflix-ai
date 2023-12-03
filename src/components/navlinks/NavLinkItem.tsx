import Icon from "components/Icon";
import { NavLink } from "react-router-dom";
import { ICON_TYPES } from "types/type";
type propType = {
  path: string;
  iconName: ICON_TYPES;
  label: string;
};
const NavLinkItem = (props: propType) => {
  const { path, iconName, label } = props;
  const getClasses = (isActive: boolean, isTransitioning: boolean) =>
    [
      isActive ? "text-slate-200" : "text-slate-500",
      isTransitioning ? "transitioning" : "", //todo
    ].join(" flex");
  return (
    <NavLink
      to={path}
      className={({ isActive, isTransitioning }) =>
        getClasses(isActive, isTransitioning)
      }
      end
    >
      <Icon name={iconName} />
      <span className="invisible group-hover:visible capitalize">{label}</span>
    </NavLink>
  );
};

export default NavLinkItem;
