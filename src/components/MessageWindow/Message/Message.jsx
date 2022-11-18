import React from "react";
import style from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={style.messages}>
      <div>
        <img src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639987964_3-abrakadabra-fun-p-rasplivchatii-smailik-raduzhnii-3.jpg" />
        <div className={style.caption}>{props.name}</div>
      </div>
      <div className={style.block}>{props.text}</div>
    </div>
  );
};

export default Message;
