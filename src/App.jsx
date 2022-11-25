import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import MessageWindow from "./components/MessageWindow/MessageWindow";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
// import { addPost } from "./redux/state";
// import { addNewMessage } from "./redux/state";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                postsData={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />

          {/* //Опрокидываем пропсы dialogsData и messagesData на уровень ниже */}
          <Route
            path="/messages/*"
            element={
              <MessageWindow
                messagesPage={props.appState.messagesPage}
                addNewMessage={props.addNewMessage}
                updateNewMessageText={props.updateNewMessageText}
              />
            }
          />

          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/friends"
            element={<Friends friendsData={props.appState.friendsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
