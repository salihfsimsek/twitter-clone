import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
//Icons
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icon";
const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed")
        .add({
          displayName: "Salih Şimşek",
          username: "salihfsimsek",
          content,
          avatar: "https://avatars.githubusercontent.com/u/49563074?v=4",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(setContent(""));
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-gray-extraLight">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-gray-extraLight">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-gray-extraLight">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-gray-extraLight">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-gray-extraLight">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          onClick={sendTweet}
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium shadow-inner focus:outline-none"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
