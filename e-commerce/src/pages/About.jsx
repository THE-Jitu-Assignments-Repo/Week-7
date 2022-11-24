import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about--content">
      <div className="about">
        <div className="img--about">
          <img src="./assests/About.svg" alt="about" />
        </div>
        <div className="img--about--text">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            voluptates blanditiis. Ea quis dolor consequuntur repudiandae quasi!
            Corporis consectetur doloremque odio quam non a dolorem, nam, eius
            quas atque est?
          </span>
          <p>
            <a href="https://github.com/mik284">Github</a>
          </p>

          <p>
            <a href="https://github.com/mik284">License</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
