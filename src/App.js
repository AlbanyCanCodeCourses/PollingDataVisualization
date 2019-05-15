import React from 'react';
import Charts from './Charts'

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

/**
 * File has been updated to use temporary router paths and display placeholder components - Nikita
 */

const App = (props) => {
    return (
     
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/datavisualization" component={Charts}/>
          <Route path="/datavisualization" component={Charts}/>
          <Route path="/charts" component={Charts}/>
        </Switch>
      </BrowserRouter>
      


    )
}

export default App;
