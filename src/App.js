import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
import { Switch,Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Volunteer' component={Volunteer} /> 
      </Switch>
    </div>
  );
}

export default App;
