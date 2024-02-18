import React, { useState } from "react";
import User from "../../style/images/User.png";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import Battery4BarIcon from "@mui/icons-material/Battery4Bar";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useNavigate, useParams } from "react-router-dom";
import TextsmsIcon from "@mui/icons-material/Textsms";
import appStor from "../../style/images/appStor.png";
import playStor from "../../style/images/playStor.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// icons
import YoutubeLogo from "../../style/images/youtube.png";
import InstagramLogo from "../../style/images/instagram.png";
import FacebookLogo from "../../style/images/facebook.png";
import XLogo from "../../style/images/xlogo.png";
import { useAppContext } from "../../context";

function SideBar() {
  const [selectMenu, setSelectMenu] = useState(null);

  const {state,Actions}=useAppContext()
  const {openSideBar}=state

  const listItem = [
    { id: 1, path: "/", icons: <HomeIcon />, name: "Home" },
    { id: 2, path: "/message", icons: <TextsmsIcon />, name: "Messages" },
    { id: 3, path: "/settings", icons: <SettingsIcon />, name: "Settings" },
    { id: 4, path: "/upgrade", icons: <Battery4BarIcon />, name: "Upgrade" },
    { id: 5, path: "/explore", icons: <UnfoldMoreIcon />, name: "Explore" },
  ];
  const naviagate = useNavigate();

  const url = window?.location?.pathname;
  const splitUrl = url.split("/");
  const urlId = splitUrl[2];

  const handelProfilePage=()=>{
    naviagate('/orgProfile')
    }
  
  return (
    <div className={`${openSideBar ?'isOpenSidebar':'main-sidebar'}`}>
      <div className="sidebar">
        <div className="image-user" onClick={handelProfilePage}>
          <img src={User} alt="" />
        </div>
        <div className="sidebar-destails">
          <h3>Muhammed Anas</h3>
          <h2>MN001XDR</h2>
          <div className="view-profile">
            <h3>
              <RemoveRedEyeIcon />
              View Profile
            </h3>
          </div>
        </div>

        <div className="links-section">
          {listItem.map((Item, index) => (
            <li
              className={`${selectMenu === Item.id && "ActiveMenu"}`}
              key={Item.id}
              onClick={() => {
                naviagate(Item.path);
                setSelectMenu(Item.id);
              }}
            >
              {Item.icons}
              {Item.name}
            </li>
          ))}
        </div>
      </div>
      <div className="download-section">
        <h1>Download our App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugit{" "}
        </p>

        <div className="download-image">
          <img src={appStor} alt="" />
        </div>
        <div className="download-image">
          <img src={playStor} alt="" />
        </div>
      </div>

      {urlId && (
        <div className="id-based-contant">
          <div className="sidebar-policy-list">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Pricing</li>
            <li>Feedback</li>
            <li>Help & Support</li>
          </div>

          <div className="sidebar-policy-icons">
            <img src={YoutubeLogo} alt="" />
            <img src={InstagramLogo} alt="" />
            <img src={FacebookLogo} alt="" />
            <img src={XLogo} alt="" />

            <h4>2024 Mynikkah</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
