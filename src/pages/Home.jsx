import React from "react";
import { OuterCog, Middle, Main, Title } from "../images/imageList"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-tab">
      <div className="home-section">
        <div className="title-container">
          
        </div>
        <div className="image-container">
          <img className="img1 rotate" src={OuterCog} ></img>
          <img className="img2 rotateReverse" src={Middle} ></img>
          <img className="img3 rotate" src={Main} ></img>
        </div>
        <div className="login-container">
          <div className="nav">
            <Link to="login">LOGIN</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
