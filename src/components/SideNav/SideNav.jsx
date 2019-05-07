import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


const SideNav = (props) => {
  return (
    <Router>
      <div id="mySidenav" class="sidenav">
        <Link
          to="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
        >
          &times;
        </Link>
        <Link to="#">Item 1</Link>
        <Link to="#">Item 2</Link>
        <Link to="#">Item 3</Link>
        <Link to="#">Item 4</Link>
      </div>
    </Router>
  );
};

export default SideNav;
