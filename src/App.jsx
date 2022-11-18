import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import MessageWindow from "./components/MessageWindow/MessageWindow";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile postsData={props.appState.profilePage}/>} />

{/* //Опрокидываем пропсы dialogsData и messagesData на уровень ниже */}
            <Route path="/messages/*" element={<MessageWindow messagesPage={props.appState.messagesPage} />} />

            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
