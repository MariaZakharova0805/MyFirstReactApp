import React from "react";
import style from "./Friends.module.css";
import FriendInfo from "./FriendInfo/FriendInfo.jsx";

const Friends = (props) => {
  const friendsData = props.friendsData.friendsData;

  let FriendInfoMap = friendsData.map((f) => (
    <FriendInfo name={f.name} src={f.src} />
  ));

  return <div className={style.content}>{FriendInfoMap}</div>;
};

export default Friends;
