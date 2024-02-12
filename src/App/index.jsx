import React from "react";
import Header from "../components/Header";
import SideBar from "./SIdeBar/SideBar";
import Route from "../routes";
import { useAppContext } from "../context";

function App() {
  const context = useAppContext();
  const { Actions, state } = context;

  const { isSideBar } = Actions;
  const { ipPopupData } = state;

  const closeSidebarHandler = () => {
    isSideBar.isSideBarClose();
  };
  return (
    <>
      {!ipPopupData && <Header />}
     
     
      <div className={`app-Layout ${ipPopupData===true?'activePopup' : ''}`}>
        <SideBar />
        <div className="layout" onClick={closeSidebarHandler}>
          <Route />
        </div>
      </div>
    </>
  );
}

export default App;
