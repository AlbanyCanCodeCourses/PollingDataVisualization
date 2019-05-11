import React from 'react';
import Charts from './Charts'
import Blank from './Blank'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './App.css';

/**
 * File has been updated to use temporary router paths and display placeholder components - Nikita
 */

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/datavisualization" component={Blank}/>
          <Route path="/datavisualization" component={Blank}/>
          <Route path="/charts" component={Charts}/>
        </Switch>
      </BrowserRouter>
    )
}

export default App;
