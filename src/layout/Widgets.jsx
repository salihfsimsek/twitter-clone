import React from "react";
import { Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../icons/Icon";
const Widgets = () => {
  return (
    <aside className="h-screen sticky top-0 w-80 xs:hidden lg:block">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent w-full text-sm focus:outline-none"
        />
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "ProfDemirtas",
          }}
          options={{
            height: "550",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
