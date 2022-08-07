import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/ir.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={ir}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
            Directed undergraduate student pursuing a Bachelor of Science focused in Computer Science from University of Wisconsin-Madison. I also love playing badminton and sketching portraits!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
