import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

const SettingsChange = () => {
  return (
    <>
      <h1>Notifications</h1>
      <h2>Notification</h2>

      <div className="enable-contant">
        <p>
          Enable notifications to stay up to date with new likes, matches and
          messages
        </p>
        <PinkSwitch {...label} defaultChecked/>
      </div>
    </>
  );
};

function Settings() {
  return (
    <div className="setting-page">
      <div className="full-name">
        <h2>First Name</h2>
        <h3>Muhammed Anas</h3>
      </div>

      <div className="email-address">
        <h2>Email Address</h2>
        <h3>example@email.com</h3>
      </div>

      <div className="phone-number">
        <h2>Phone Number </h2>
        <h3>+91 8129904187</h3>
      </div>

      <div className="enable-section notification-section">
        <SettingsChange />
      </div>

      <div className="enable-section account-section">
        <SettingsChange />
      </div>

      <div className="enable-section ">
        <SettingsChange />
      </div>

      <div className="email-address">
        <h2>Reset Password</h2>
        <h3>Reset your password</h3>
      </div>

      <div className="phone-number">
        <h2>Blocked Accounts </h2>
        <h3>Manage the profiles you have blocked</h3>
      </div>

      <div className="phone-number">
        <h2>Deactivate / Delete account </h2>
        <h3>Take your profile completely Offline or leave </h3>
      </div>

      <div className="phone-number">
        <h2>Logout </h2>
      </div>
    </div>
  );
}

export default Settings;
