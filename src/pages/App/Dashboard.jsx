import React, { useState } from "react";
import { Profile, Ham } from "../../images/imageList";

import TaskListArea from "./components/TaskListArea";

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard-app">
      <header className="header">
        <div className="header-container">
          <div className="left-control">
            <img className="img1" src={Ham} onClick={openMenu}></img>
          </div>

          <div className="right-control">
            <img className="img1" src={Profile}></img>
          </div>
        </div>
      </header>
      <div className="main">
        <div className={isMenuOpen ? "left-menu menu-open" : "left-menu"}></div>
        <div
          className={isMenuOpen ? "main-content main-shift" : " main-content"}
        >
          <TaskListArea project={[]} layoutType="Grid" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
