import React from "react";
import ProfileCard from "../components/ProfileCard";
import UserListCard from "../components/UserListCard";
import { profileCard } from "../constance/profileCard";
import YoutubeLogo from '../style/images/youtube.png'
import InstagramLogo from '../style/images/instagram.png'
import FacebookLogo from '../style/images/facebook.png'
import XLogo from '../style/images/xlogo.png'




function Home() {

  return (
    <div className="page-layout">
      <div className="profile-row">
        {profileCard.map((item) => (
          <ProfileCard key={item.id} id={item.id} image={item.image} />
        ))}
      </div>

      <div className="users-card-row">
        <UserListCard title="Messages" />
        <UserListCard button title="Likes and Matches" />

        <div className="policy-section">
          <div className="policy-list">
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Pricing</li>
          <li>Feedback</li>
          <li>Help & Support</li>
          </div>

          <div className="policy-icons">
            <img src={YoutubeLogo} alt="" />
            <img src={InstagramLogo} alt="" />
            <img src={FacebookLogo} alt="" />
            <img src={XLogo} alt="" />

            <h4>2024 Mynikkah</h4>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
