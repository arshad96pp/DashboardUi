import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import { Button } from "@mui/material";
import User from "../style/images/User.png";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import { tagData } from "../constance/InrerestTag";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ProfileTopCard = () => {
  return (
    <div className="profile-details-card">
      <div className="image-container">
        <img src={User} alt="" />
      </div>
      <div className="details-container">
        <div className="details">
          <h3>
            Muhammed Anas{" "}
            <span>
              <CheckCircleRoundedIcon />
            </span>
          </h3>
          <h2>MN001XDR</h2>
          <h4>Muslim</h4>
          <h4>Never Married</h4>
          <h4>Bachelors (BSc Computer Science)</h4>
          <h4>Kozhikode, Kozhikode, Kerala</h4>
        </div>

        <div className="button-container">
          <Button variant="outlined">
            <span>
              <EditRoundedIcon />
            </span>
            <span>Edit profile</span>
          </Button>
          <Button variant="outlined">
            <span>
              <UpgradeRoundedIcon />
            </span>
            <span>Upgrade</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ImageListComponents = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <div className="bio-left">
      <div className="image-list">
        <h2>
          <span>
            <CameraAltRoundedIcon />
          </span>
          <span>Photos</span>
        </h2>
        <ImageList
          sx={{ width: 350, height: 230 }}
          cols={3}
          // rowHeight={150}
          className="image-list-scroll"
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="tag-list">
        <h2>Interest</h2>

        <div className="tags">
          {tagData.map((item, index) => (
            <li key={index}>
              <img src={item.icon} alt="" />
              {item.tags}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

const BioDetailsComponents = () => {
  return (
    <div className="bio-right">
      <div className="profile-bottom-section">
        <div className="profile-bottomCard">
          <h1>Bio</h1>
          <h2>Basic Information</h2>

          <table>
            <tr>
              <td>Date of Birth</td>
              <td>27-12-1997</td>
            </tr>
            <tr>
              <td>Email Id</td>
              <td>Example@gmail.com</td>
            </tr>

            <tr>
              <td>Blood Group</td>
              <td>AB+</td>
            </tr>

            <tr>
              <td>Height</td>
              <td>164cm</td>
            </tr>

            <tr>
              <td>Weight</td>
              <td>64kg</td>
            </tr>
          </table>

          <h2>Religious Information</h2>

          <table>
            <tr>
              <td>Religion</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td>Sect</td>
              <td>Sunny</td>
            </tr>

            <tr>
              <td>Perform Namaz</td>
              <td>Always</td>
            </tr>

            <tr>
              <td>Read Qur'an</td>
              <td>Daily</td>
            </tr>

            <tr>
              <td>Religiousness</td>
              <td>Religious</td>
            </tr>
          </table>

          <h2>Educational and Professional Information</h2>

          <table>
            <tr>
              <td>Education</td>
              <td>Bachelors (Bsc Computer Science)</td>
            </tr>
            <tr>
              <td>Profession</td>
              <td>Cumputer Engineer</td>
            </tr>
          </table>

          <h2>Religious Information</h2>

          <table>
            <tr>
              <td>Religion</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td>Sect</td>
              <td>Sunny</td>
            </tr>

            <tr>
              <td>Perform Namaz</td>
              <td>Always</td>
            </tr>

            <tr>
              <td>Read Qur'an</td>
              <td>Daily</td>
            </tr>

            <tr>
              <td>Religiousness</td>
              <td>Religious</td>
            </tr>
          </table>

          <h2>Religious Information</h2>

          <table>
            <tr>
              <td>Religion</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td>Sect</td>
              <td>Sunny</td>
            </tr>

            <tr>
              <td>Perform Namaz</td>
              <td>Always</td>
            </tr>

            <tr>
              <td>Read Qur'an</td>
              <td>Daily</td>
            </tr>

            <tr>
              <td>Religiousness</td>
              <td>Religious</td>
            </tr>
          </table>

          <h2>Religious Information</h2>

          <table>
            <tr>
              <td>Religion</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td>Sect</td>
              <td>Sunny</td>
            </tr>

            <tr>
              <td>Perform Namaz</td>
              <td>Always</td>
            </tr>

            <tr>
              <td>Read Qur'an</td>
              <td>Daily</td>
            </tr>

            <tr>
              <td>Religiousness</td>
              <td>Religious</td>
            </tr>
          </table>

          <h2>Religious Information</h2>

          <table>
            <tr>
              <td>Religion</td>
              <td>Islam</td>
            </tr>
            <tr>
              <td>Sect</td>
              <td>Sunny</td>
            </tr>

            <tr>
              <td>Perform Namaz</td>
              <td>Always</td>
            </tr>

            <tr>
              <td>Read Qur'an</td>
              <td>Daily</td>
            </tr>

            <tr>
              <td>Religiousness</td>
              <td>Religious</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

function OrgProfile() {
  return (
    <div className="profile-update ">
      <ProfileTopCard />

      <div className="bio-section">
        <ImageListComponents />
        <BioDetailsComponents />
      </div>
    </div>
  );
}

export default OrgProfile;
