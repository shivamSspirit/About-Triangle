import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="MainContainer">
      <div className="FooterContainer">
        <div className="footerHead">
          <h3>social media presence</h3>
        </div>

        <div className="ulContainer">
          <ul className="ulstyle">
            <li className="listStyle">
              <a href="https://github.com/shivamsoni00">github</a>
            </li>
            <li className="listStyle">
              <a href="https://www.linkedin.com/in/shivam-s-b37b00157">
                linkedin
              </a>
            </li>
            <li className="listStyle">
              <a href="https://twitter.com/shivam_spirit">twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
