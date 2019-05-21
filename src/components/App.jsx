import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
<<<<<<< HEAD
import Barchart from "./Barchart/Barchart.jsx";
=======
import Barchart from "./Barchart/Barchart";
import Blank from "./Blank/Blank"
>>>>>>> 1cd7a2f732c61191cb6dd32eae64364f7d118501

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Barchart} />
=======
        <Route exact path="/" component={Barchart
      } />
        <Route path="/datavisualization" component={Blank} />
>>>>>>> 1cd7a2f732c61191cb6dd32eae64364f7d118501
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
