import React, { useEffect, useState } from "react";
import db from "../firebase";

//Icon
import { PopulerIcon } from "../icons/Icon";

//Components
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import FeedList from '../components/FeedList'

const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="flex-1 flex flex-col border-l border-r border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/49563074?v=4"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets}/>
    </div>
  );
};

export default Content;
