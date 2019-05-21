import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          © 2016-{new Date().getFullYear()} ALBANYCANCODE. ALL RIGHTS RESERVED.
        </p>
        <ul>
          <li>
            <a href="https://albanycancode.org/">HOME</a>
          </li>
          <li>
            <a href="https://albanycancode.org/employers/">EMPLOYERS</a>
          </li>
          <li>
            <a href="https://albanycancode.org/donate/">DONATE</a>
          </li>
          <li>
            <a href="https://albanycancode.org/news/">NEWS</a>
          </li>
          <li>
            <a href="https://albanycancode.org/contact/">CONTACT</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
