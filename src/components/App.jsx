import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import Barchart from "./Barchart/Barchart";
import Cards from "./Cards/cardData";

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <Route exact path="/" component={Barchart} />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Route path="/" component={Cards} />
      <Footer />
    </div>
  );
}

export default App;
