import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Eboard from './Components/Eboard';
import Mission from "./Components/Mission"
import Programming from "./Components/Programming";
import Home from "./Components/Home"
import NavBar from './Components/NavBar';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Mentorship from './Components/Mentorship'
import Tutoring from "./Components/Tutoring"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
          <Route path = "/mission">
            <Mission/>
          </Route>
          <Route path = "/eboard">
              <Eboard/>
            </Route>
          <Route path = "/programming">
            <Programming/>
          </Route>
          <Route path = "/events">
            <Events/>
          </Route>
          <Route path = "/contact">
            <Contact/>
          </Route>
          <Route path = "/mentorship">
            <Mentorship/>
          </Route>
          <Route path = "/tutoring">
            <Tutoring/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>   
        <Footer/>
    </div>
  );
}

export default App;
