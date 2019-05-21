import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import Barchart from "./Barchart/Barchart";
import Blank from "./Blank/Blank";

function App() {
  return (
    <>
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <Route exact path="/" component={Barchart} />
        <Route path="/datavisualization" component={Blank} />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
