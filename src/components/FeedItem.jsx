import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) => {
  return (
    <div className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="profile" className="h-11 w-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className="font-bold">{displayName}</h4>
          <span className="ml-2 text-gray-dark">{username}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 rounded-full"></div>
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && (
          <img
            src={image}
            alt="contentImage"
            className="my-2 rounded-xl max-h-96"
          />
        )}
        <ul className="-ml-1 mt-3 flex justify-between items-center max-w-md">
          <li className="group flex items-center space-x-1 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">10</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100 ">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
            </div>
            <span className="group-hover:text-green-400">10</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-100 ">
              <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
            </div>
            <span className="group-hover:text-pink-400">10</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedItem;
