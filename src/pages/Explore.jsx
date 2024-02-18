import React, { useState } from "react";
import { profileCard } from "../constance/profileCard";

function Explore() {
  const [selectItem, setSelectItem] = useState(1);

  const listItem = [
    {
      id: 1,
      name: "Likes You",
    },
    {
      id: 2,
      name: "Blocked You",
    },
    {
      id: 3,
      name: "Visited You",
    },
  ];

  const handelSelect = (id) => {
    setSelectItem(id);
  };
  return (
    <div className="explore-page">
      <div className="like-block-visit-btn">
        {listItem?.map((item) => (
          <li className={`${selectItem===item.id && 'item-selected'}`} onClick={() => handelSelect(item.id)} key={item.id}>
            {item.name}
          </li>
        ))}
      </div>

      {/* globel must be please makethis re useble comand */}

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
  );
}

export default Explore;
