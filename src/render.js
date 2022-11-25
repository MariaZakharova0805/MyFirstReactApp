import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import state from "./redux/state"; нельзя делать циклическую зависимость, передадим state чере ф-ию rerenderEntireTree
import { addPost, updateNewPostText, addNewMessage, updateNewMessageText} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

// объявляется переменная root, через которую уже позже рендериться приложение, её необходимо вынести за пределы функции:
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}

          addNewMessage={addNewMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default rerenderEntireTree;
