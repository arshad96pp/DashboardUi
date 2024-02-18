import React from "react";
import { useParams } from "react-router-dom";
import { profileCard } from "../constance/profileCard";
import { tagData } from "../constance/InrerestTag";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import Like from "../style/images/Like.png";
import Send from "../style/images/Send.png";
import CustomBtn from "../components/CustomBtn";

function ProfilePage() {
  const { id } = useParams();

  const imageData = profileCard?.find((item) => item.id === JSON.parse(id));

  return (
    <div className="profilePage">
      <div className="profile-top-section">
        <div
          className="prifile-top-image"
          style={{ backgroundImage: `url(${imageData?.image})` }}
        >
          <div className="arrowIcons">
            <span>
              <KeyboardArrowLeftRoundedIcon />
            </span>
            <span>
              <KeyboardArrowRightRoundedIcon />
            </span>
          </div>
        </div>
        <div className="prifile-top-contant">
          <h1>{imageData?.name}</h1>
          <h2>MN001XDR</h2>

          <span>52 Km from you</span>

          <h3>Never Married</h3>
          <h3>Bachelors (Bsc Computer Science)</h3>
          <h3>Kozhikode,Kozhikode,Kerala</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
            pariatur nesciunt consequuntur praesentium perspiciatis facere
          </p>

          <h1>Interests</h1>

          <div className="tags-profile">
            {tagData.map((item, index) => (
              <li key={index}>
                <img src={item.icon} alt="" />
                {item.tags}
              </li>
            ))}
          </div>

          <div className="profile_btn">
            <div className="left_btn pBtn">
              <h5>
                <img src={Like} alt="" />
                Show Interest
              </h5>
            </div>
            <div className="right_btn pBtn">
              <h5>
                <img src={Send} alt="" />
                Share Profile
              </h5>
            </div>
          </div>

          <CustomBtn>
            <CallRoundedIcon />
            Request Call
          </CustomBtn>
        </div>
      </div>
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

          <CustomBtn>Upgrade to See More</CustomBtn>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
