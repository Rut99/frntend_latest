import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Route,
  
} from "react-router-dom";

// import Home from "./Home";
import Register from "./containers/RegisterPage/Register";
import Now from "./containers/LoginPage/Login";
import aggridtry from "./containers/aggridtry/aggridtry";
import ImportFile from "./containers/ImportFile/ImportFile";
import NewApp from "./containers/NewApp/NewApp";
import TeacherNavbar from "./containers/Teacher/TeacherNavbar";
class App extends React.Component {
  render() { 
    return (
          <Router>
            <Route exact strict path="/" component={NewApp} />
            <Route exact strict path="/Register" component={Register} />
            <Route exact strict path="/Login" component={Now} />
            <Route exact strict path="/aggridtry" component={aggridtry} />
            <Route exact strict path="/importfile" component={ImportFile} />
            {/* <Route exact strict path="/teacher" component={TeacherNavbar} /> */}
          </Router>
    );
  }
}

export default App;
