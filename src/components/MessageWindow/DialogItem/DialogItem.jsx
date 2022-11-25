import React from "react";
import m from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


//переключение ссылок контактов
const setActive = ({ isActive }) => (isActive ? m.chosen : m.item);

const DialogItem = (propsDial) => {
  let path = "/messages/" + propsDial.id;
  return (
    <NavLink to={path} className={setActive}>
      {propsDial.name}
    </NavLink>
  );
};

export default DialogItem;
