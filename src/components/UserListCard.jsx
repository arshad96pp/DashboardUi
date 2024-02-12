import React from 'react'
import Pr from "../style/images/pr.png";
import { profileCard } from '../constance/profileCard';
import { useAppContext } from '../context';



function UserListCard({button,title}) {

  const context = useAppContext();

  const { Actions, state } = context;

  const { isSideBar } = Actions;
  const { ipPopupData } = state;

  return (
    <div className="usersCard">
    <div className="userCard-header">
      <h1>{title}</h1>
      <h4>see all</h4>
    </div>


    {button && (
      <div className="usercardButton">
      <div className="leftBtn">
        <h3>Likes</h3>
      </div>
      <div className="rightBtn">
        <h3>Matches</h3>
      </div>
    </div>
    )}
    

    <div className="users-list">
      {profileCard.map((item) => (
        <div className="avtar-menu">
          <div className="avatar-image-contant">
            <div
              className="avarat-cercle"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="avatar-name">
              <h1>{item.name}</h1>
              <h4>Talk your lr</h4>
            </div>
          </div>

          <p>12:00 Pm</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default UserListCard