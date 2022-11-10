import React from "react";

const ProfilePage = () => {
  return (
    <div className="content">
      <div className="TopImg">
        <img src="https://sr.gallerix.ru/_RUS/1974404551/1061296902.jpg" />
      </div>
      <div className="ProfileInfo">
        <div className="ProfileImg">
          <img src="https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG" />
        </div>
        <div className="MainInfo">
          <h2>Мария Искусница</h2>
          <p>День нарождения: May 8th</p>
          <p>Городище: Moscow</p>
          <p>Учреждение: Bauman State Univercity</p>
          <p>
            Полоса:{" "}
            <a href="https://github.com/MariaZakharova0805">
              жми
            </a>
          </p>
        </div>
      </div>

      <div className="posts">
        <h2>My posts</h2>
        <textarea></textarea>
        <button className="send">Отослать</button>
        <div>
          <div className="OldPosts">
            <div className="post">
              <div className="circle"></div>
              <p>Сегодня я покушал</p>
            </div>
            <div className="post">
              <div className="circle"></div>
              <p>Сегодня я изучал React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
