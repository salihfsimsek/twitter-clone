import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li
      className="group cursor-pointer block text-xl mb-2"
      onClick={() => onMenuItemClick(name)}
    >
      <div className="inline-block">
        <div
          className={`flex items-center p-3 rounded-full group-hover:bg-primary-light  group-hover:text-primary-base
            ${isActive ? "text-primary-base" : ""}`}
        >
          <Icon />
          <span className="xs:hidden md:block ml-4 font-bold">{name}</span>
        </div>
      </div>
    </li>
  );
};

export default SideLink;
