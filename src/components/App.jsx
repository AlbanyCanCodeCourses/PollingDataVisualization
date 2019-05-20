<<<<<<< HEAD
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
=======
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
>>>>>>> 4ccd887b18ef830677176471973a2e99b9d8163d

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import Barchart from "./Barchart/Barchart";
<<<<<<< HEAD
import Cards from "./Cards/cardData";
=======
>>>>>>> 4ccd887b18ef830677176471973a2e99b9d8163d

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Barchart} />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Route path="/" component={Cards} />
=======
        <Route exact path="/" component={Barchart
      } />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
>>>>>>> 4ccd887b18ef830677176471973a2e99b9d8163d
      <Footer />
    </div>
  );
}

export default App;
