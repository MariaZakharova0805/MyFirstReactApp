import React from "react";
import m from "./MessageWindow.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const MessageWindow = (propsMes) => {

  const messagesData = propsMes.messagesPage.messagesData;
  const dialogsData = propsMes.messagesPage.dialogsData;

  //Перебор массива dialogsData(контакты)  и превращение его в разметку JSX
  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  //Перебор map массива messagesData и превращение его в JSX разметку
  let messagesElements = messagesData.map((m) => (
    <Message name={m.name} text={m.text} />
  ));

  //Основной код, куда вставляем messagesElements и dialogsElements
  return (
    <div className={m.dialogs}>
      <div className={m.dialogsItems} dialogsData>
        {dialogsElements}
      </div>

      <div className={m.dialogWindow}>{messagesElements}</div>
    </div>
  );
};

export default MessageWindow;
