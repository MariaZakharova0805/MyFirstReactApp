import React from "react";
import style from "./FriendInfo.module.css";

const FriendInfo = (props) => {
  return (
    <div className={style.friends}>
      <div className={style.friend}>
        <img src={props.src} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default FriendInfo;
