import React from "react";
import Bank from "../style/images/Group 34.png";
import CustomBtn from "../components/CustomBtn";

const PricingCard = () => {
  return (
    <div className="pricing-card">
      <div className="card-price">
        <h1>Silver</h1>
        <h2>Rs:3300/-</h2>
      </div>
      <p>View Contact Details</p>
      <p>Send Personalised Messages</p>
      <p>Contact Numbers</p>
      <p>View Your Profile Viewers</p>
      <p>View Your Contact Viewers</p>

      <div className="card-btn">
        <CustomBtn>Upgrade to See More</CustomBtn>
      </div>
    </div>
  );
};

function Pricing() {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>The right plan for you</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="pricing-cards">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
      <div className="bank-logos">
        <marquee behavior="loop" direction="">
          {" "}
          <img src={Bank} alt="" />
        </marquee>
      </div>

      {/* <footer>
        edefe
      </footer> */}
    </div>
  );
}

export default Pricing;
