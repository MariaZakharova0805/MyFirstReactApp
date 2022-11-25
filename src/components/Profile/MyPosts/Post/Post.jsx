import React from "react";
import style from "./Post.module.css";

const Post = (propsMes) => {
  return (
    <div className={style.post}>
          <img src="https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG" />
      <p> <span className={style.date}>{propsMes.date} </span> {propsMes.message}</p>
      <div className={style.like}>
        <img
          src="https://static5.depositphotos.com/1007350/429/i/450/depositphotos_4292201-stock-photo-painted-heart-symbol-of-love.jpg"
          alt=""
        />
      </div>
      <span className={style.likeAmount}>{propsMes.likeCount}</span>
    </div>
  );
};

export default Post;
