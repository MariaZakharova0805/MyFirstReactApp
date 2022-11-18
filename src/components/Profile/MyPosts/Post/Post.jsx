import React from "react";
import classes from "./Post.module.css";

const Post = (propsMes) => {
  return (
    <div className={classes.post}>
      <p>{propsMes.message}</p>
      <div className={classes.like}>
        <img
          src="https://static5.depositphotos.com/1007350/429/i/450/depositphotos_4292201-stock-photo-painted-heart-symbol-of-love.jpg"
          alt=""
        />
      </div>
      <span className={classes.likeAmount}>{propsMes.likeCount}</span>
    </div>
  );
};

export default Post;
