import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import NavBarContainer from "../NavBar/NavBarContainer";
import Footer from "../Footer/Footer";
import LoginContainer from "../Login/LoginContainer";
import Barchart from "../Barchart/Barchart";

function HomePage() {
  return (
    <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/chart" component={Barchart} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
   );
   

  }
export default HomePage;