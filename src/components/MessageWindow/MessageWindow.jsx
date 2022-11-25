import React from "react";
import style from "./MessageWindow.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const MessageWindow = (props) => {
  //Берем элементы пропс из state,опрокинув их в index и App
  let messagesData = props.messagesPage.messagesData;
  let dialogsData = props.messagesPage.dialogsData;

  //Перебор массива dialogsData(контакты)  и превращение его в разметку JSX
  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  //Перебор map массива messagesData и превращение его в JSX разметку
  let messagesElements = messagesData.map((m) => (
    <Message name={m.name} text={m.text} src={m.src} />
  ));

  //Создаем новое сообщение в переписке
  let newMessage = React.createRef();

  let addMessage = () => {
    props.addNewMessage();
    newMessage.current.value = "";
  };

  
    //texarea
    let onMessageChange = () => {
      let text = newMessage.current.value;
      //text передается в BLL state при изменении в textarea?
      props.updateNewMessageText(text);
    };

  //Основной код, куда вставляем messagesElements и dialogsElements
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems} dialogsData>
        {dialogsElements}
      </div>
      <div className={style.dialogWindow}>
        {messagesElements}
        <div className={style.newMessage}>
          <textarea ref={newMessage} className={style.messageArea}  onChange={onMessageChange}></textarea>
          <button onClick={addMessage} className={style.sendButton}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageWindow;
