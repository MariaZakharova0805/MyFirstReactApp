import React from "react";
import style from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={style.messages}>
      <div>
        <img src={props.src} />
        <div className={style.caption}>{props.name}</div>
      </div>
      <div className={style.block}>{props.text}</div>
    </div>
  );
};

export default Message;
