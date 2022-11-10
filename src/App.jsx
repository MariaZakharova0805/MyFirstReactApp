import React from "react";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <ProfilePage/>
      <Footer/>
    </div>
  );
};

export default App;
