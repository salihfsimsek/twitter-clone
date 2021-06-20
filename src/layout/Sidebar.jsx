import React, { useState } from "react";

//Components
import SideLink from "../components/SideLink.jsx";
import UserBox from "../components/UserBox.jsx";
//Icons

import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icon";

//Logo
import TwitterLogo from "../images/twitter.svg";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const sideLinks = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Explore",
      icon: ExploreIcon,
    },
    {
      name: "Notifications",
      icon: NotificationsIcon,
    },
    {
      name: "Messages",
      icon: MessagesIcon,
    },
    {
      name: "Bookmarks",
      icon: BookmarksIcon,
    },
    {
      name: "Lists",
      icon: ListsIcon,
    },
    {
      name: "Profile",
      icon: ProfileIcon,
    },
    {
      name: "More",
      icon: MoreIcon,
    },
  ];

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="h-screen sticky top-0 md:w-72 flex flex-col justify-between items-center px-2 ">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 cursor-pointer rounded-full hover:bg-gray-extraLight transition-colors duration-200">
          <img src={TwitterLogo} className="w-9 h-9" alt="Logo" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="xs:hidden md:block text-white bg-primary-base rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">
          Tweet
        </button>
        <img
          src={TwitterLogo}
          alt="Logo"
          className="xs:block md:hidden h-8 w-8 rounded-full m-4"
        />
      </div>
      <UserBox />
    </div>
  );
};

export default Sidebar;
