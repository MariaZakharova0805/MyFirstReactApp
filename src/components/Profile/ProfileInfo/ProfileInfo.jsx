import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className="classes.ProfileInfo">
      <div className={classes.topImg}>
        <img src="https://sr.gallerix.ru/_RUS/1974404551/1061296902.jpg" />
      </div>
      <div className={classes.profile}>
        <div className={classes.profileImage}>
          <img src="https://dokuhni.ua/images/cache/uploads/480x520/user_files/22404/2710-2.JPG" />
        </div>
        <div className={classes.info}>
          <h2>Марья Искусница</h2>
          <p>День нарождения: May 8th</p>
          <p>Городище: Moscow</p>
          <p>Учреждение: Bauman State Univercity</p>
          <p>
            Полоса:{" "}
            <a href="https://github.com/MariaZakharova0805" target="_blank">
              жми
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
