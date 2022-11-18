import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const postsData = props.postsData.postsData;

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
