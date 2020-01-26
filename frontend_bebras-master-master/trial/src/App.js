import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Route,
  
} from "react-router-dom";

// import Home from "./Home";
import Register from "./containers/RegisterPage/Register";
import Now from "./containers/LoginPage/Login";
import NewApp from "./containers/NewApp/NewApp";
class App extends React.Component {
  render() { 
    return (
          <Router>
            <Route exact strict path="/" component={NewApp} />
            <Route exact strict path="/Register" component={Register} />
            <Route exact strict path="/Login" component={Now} />
          </Router>
    );
  }
}

export default App;
