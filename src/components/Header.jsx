import React from "react";
import LogoutIcon from "../style/images/logout.png";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useAppContext } from "../context";
import { useNavigate } from "react-router-dom";

function Header() {
  const {state,Actions}=useAppContext()
  const {isSideBar}=Actions

  const navigate=useNavigate()

  const openSideBarHandler=()=>{
    isSideBar.isSideBarOpen()  
  }

  return (
    <header>
     <div className="header-menu">
      <span onClick={openSideBarHandler}><MenuRoundedIcon/></span>
     </div>
      <h3 onClick={()=>navigate('/pricing')}>
        {" "}
        <img src={LogoutIcon} alt="" />
        Logout
      </h3>
    </header>
  );
}

export default Header;
