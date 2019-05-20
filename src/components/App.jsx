<<<<<<< HEAD
import React from "react";
import "./App.css";
import axios from "../../node_modules/axios";
import Container from "./BarChart/BarChart.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import "materialize-css";

function App() {
    return (
        <div>
            <NavBar />
            <main>
                <div className="poll-wrapper">
                    <div className="tab">Edit Poll</div>
                    <div className="tab">Poll Results</div>
                    <div id="poll-content">
                        <Container />
                    </div>
                </div>
            </main>
        </div>
    )
=======
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import Barchart from "./Barchart/Barchart";

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <Route exact path="/" component={Barchart
      } />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
>>>>>>> upstream/master
}

export default App;
