import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "./SIdeBar/SideBar";
import Route from "../routes";
import { useAppContext } from "../context";
import { useLocation } from "react-router-dom";

function App() {
  const context = useAppContext();
  const { Actions, state } = context;

  const { isSideBar } = Actions;
  const { ipPopupData } = state;

  const closeSidebarHandler = () => {
    isSideBar.isSideBarClose();
  };

  // location change
  const location = useLocation();
  const [pathname, setPathName] = useState("");

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <>
      <Header />

      <div
        className={`app-Layout ${ipPopupData === true ? "activePopup" : ""}`}
      >
        <div
          className={`${
            pathname !== "/orgProfile" && pathname !== "/pricing"
              ? "main-sidebar"
              : "display-none"
          }`}
        >
          <SideBar />
        </div>
        <div className="layout" onClick={closeSidebarHandler}>
          <Route />
        </div>
      </div>

      {pathname === "/pricing" && (
        <footer>
          
        </footer>
      )}
    </>
  );
}

export default App;
