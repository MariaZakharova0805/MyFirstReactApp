import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

//Данные для постов, сообщение и кол-во лайков(приходят с сервера)
const MyPosts = (propsPost) => {
   
  const postsData = propsPost.postsData;


  //Перебор всего массива postsData и превращение его в разметку JSX
  let PostMessage = postsData.map((p) => (
    <Post message={p.text} likeCount={p.likeCount} />
  ));

  return (
    <div className={classes.posts}>
      <h2>Моя летопись</h2>
      <textarea className={classes.newPost}></textarea>
      <button className={classes.sendButton}>Отослать</button>
      <div>
        <div className={classes.AllPosts}>{PostMessage}</div>
      </div>
    </div>
  );
};

export default MyPosts;
