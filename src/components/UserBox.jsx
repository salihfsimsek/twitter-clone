import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-color duration-200 space-x-3 ">
      <img
        src="https://avatars.githubusercontent.com/u/49563074?v=4"
        alt="Profile"
        className="md:w-11 md:h-11 rounded-full xs:w-6"
      />
      <div className="xs:hidden md:flex flex flex-col">
        <span className="font-bold text-base text-black">Salih Şimşek</span>
        <span className="text-sm text-gray-dark ">salihfsimsek</span>
      </div>
      <div className="space-x-1 xs:hidden md:flex">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
