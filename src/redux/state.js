import rerenderEntireTree from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, text: "Сегодня я поел", likeCount: 1, date: "12.12.2022" },
      { id: 2, text: "Изучал реакт", likeCount: 123, date: "10.09.2022" },
      { id: 3, text: "Отличный день!", likeCount: 89, date: "23.08.2021" },
      { id: 4, text: "Изучал верстку", likeCount: 100, date: "01.08.202" },
    ],
    newPostText: "",
  },
  messagesPage: {
    messagesData: [
      {
        id: 1,
        name: "Dima",
        text: "Hi",
        src: "https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG",
      },
      {
        id: 2,
        name: "Andrey",
        text: "H r u",
        src: "https://vesti.ua/wp-content/uploads/2022/05/avatar-2.jpg",
      },
      {
        id: 3,
        name: "Dima",
        text: "Not bad! Lets got to the bar",
        src: "https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG",
      },
      {
        id: 4,
        name: "Andrey",
        text: "Lorem  Lorem Lorem",
        src: "https://vesti.ua/wp-content/uploads/2022/05/avatar-2.jpg",
      },
    ],
    newMessageText: "",
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Maria" },
      { id: 4, name: "Max" },
      { id: 5, name: "Alex" },
      { id: 6, name: "Olga" },
    ],
  },
  friendsPage: {
    //Данные для списка друзей
    friendsData: [
      {
        id: 1,
        name: "Dima",
        src: "https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG",
      },
      {
        id: 2,
        name: "Andrey",
        src: "https://s9.vcdn.biz/static/f/4512152511/image.jpg",
      },
      {
        id: 3,
        name: "Maria",
        src: "https://cdn.kanobu.ru/articles/pics/7b22cfa6-9aff-4dd1-9790-9680f01fc0e7.webp",
      },
      {
        id: 4,
        name: "Max",
        src: "https://img.championat.com/s/1350x900/news/big/k/k/obzor-filma-betmen-2022_16469273721670946255.jpg",
      },
      {
        id: 5,
        name: "Olga",
        src: "https://cdn.britannica.com/92/212492-050-F688647D/Olga-Tokarczuk-Polish-writer-Nobel-Prize-literature-2019.jpg",
      },
      {
        id: 6,
        name: "Alex",
        src: "https://i.guim.co.uk/img/media/5b7bedf0c16adca335aaaf724a6e64e817fd9c0f/0_82_3000_1801/master/3000.jpg?width=700&quality=85&auto=format&fit=max&s=44e99656e91f19c2861be320d35e7054",
      },
    ],
  },
};

//Чтобы отобразить state в консоли
window.state = state;

//ф-ия, вылавливающая текст в элементе текстариа по ссылке newPostElement
export let addPost = () => {
  //создаем новый объект
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText,
    likeCount: 0,
    date: formatDate(date),
  };
  //добавляем новый объект в массив postsData
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

//Отлавливаем изменения в текстариа, отправояем его в наш объект в newPostText
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

//ф-ия добавление сообщения в диалоге
export let addNewMessage = () => {
  let newMeassage = {
    id: 1,
    name: "Dima",
    text: state.messagesPage.newMessageText,
    src: "https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG",
  };
  //добавляем новый объект в массив messagesData
  state.messagesPage.messagesData.push(newMeassage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};
//Отлавливаем изменения в текстариа, отправояем его в наш объект в newMessageText
export let updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
};



// //Считаем лайки
// export let addLikeCount = (likesAmount) => {
//   state.messagesPage.messagesData.push(newMeassage);
//   rerenderEntireTree(state);
// }

// определяем сегодняшнее число
let date = new Date();
function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}

export default state;
