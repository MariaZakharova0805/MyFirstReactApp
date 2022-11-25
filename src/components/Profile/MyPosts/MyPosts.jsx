import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

//Данные для постов, сообщение и кол-во лайков(приходят с сервера)
const MyPosts = (props) => {
  const postsData = props.postsData.postsData;
  // props.postsData взяли из Profile.jsx: postsData={posts}

  //Перебор всего массива post(postData из state.js) и превращение его в разметку JSX
  let PostMessage = postsData.map((p) => (
    <Post message={p.text} likeCount={p.likeCount} date={p.date} />
  ));

  //Добавление постов на стену Profile
  //создам ссылку
  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addPost();
    // //Зануляем текст в textarea
    newPostElement.current.value='';
   
  };

  //texarea
  let onPostChange = () => {
    let text = newPostElement.current.value;
    //text передается в BLL  state при изменении в textarea?
    props.updateNewPostText(text);
  };

  return (
    <div className={style.posts}>
      <h2>Моя летопись</h2>
      <textarea
        ref={newPostElement}
        className={style.newPost}
        onChange={onPostChange}
        value={props.value}
      />
      <button onClick={addNewPost} className={style.sendButton}>
        Отослать
      </button>
      <div>
        <div className={style.AllPosts}>{PostMessage}</div>
      </div>
    </div>
  );
};

export default MyPosts;
