import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

// let classes = {
//   "navItem": "NavBar_navItem__ai88B",
//   "nav": "NavBar_nav__nxxao",
//   "active": "NavBar_active__F0qNl"
// }
//
//let class = `${classes.navItem} + ${classes.active}`

const setActive = ({ isActive }) =>
  isActive ? classes.activeLink : classes.navItem;
//если ссылка активна, то добавляем класс activeLink, в противном случае - стандартный класс navItem

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" className={setActive}>
        Профиль
      </NavLink>
      <NavLink to="/messages" className={setActive}>
        Переписки
      </NavLink>
      <NavLink to="/news" className={setActive}>
        Новости
      </NavLink>
      <NavLink to="/settings" className={setActive}>
        Настройки
      </NavLink>
      <NavLink to="/friends" className={setActive}>
        Друзья
      </NavLink>
    </nav>
  );
};

export default NavBar;
