import React, { useEffect, useState } from "react";
import { dummyChatData, profileCard } from "../constance/profileCard";

function Messages() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (index) => {
    setSelectedUser(index);
  };

  return (
    <div className="chat-container">
      <div
        className={`${
          selectedUser === null ? "chat-user-list" : "user-unselect"
        }`}
      >
        <div className="users-list">
          {profileCard.map((item, index) => (
            <div
              className="avtar-menu"
              onClick={() => handleUserClick(item.id)}
            >
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

      <div className={`${selectedUser === null ? "chat" : "chat-selected"}`}>
        {selectedUser === null ? (
          <h1 className="dumy">Select</h1>
        ) : (
          <div className="chat-page">
            <div className="chat-box">
              <div className="message_sender">
                <p>Hi Assalamu alaikum</p>
              </div>
              <div className="message_reciver">
                <p>Waalikum salam</p>
              </div>
            </div>
            <div className="chat-inputs">
              <div className="input-contant">
                <input type="text" placeholder="type your message" />{" "}
                <div className="message-send-btn">
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;
