import "./App.css";
import React from "react";
import LoginPage from   "./LoginPage"
import Videos from "./Videos"


import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/log_in" element = {<LoginPage/>} / >
          <Route path="/videos" element = {<Videos/>} / >
           
        </Routes>
      </Router>
      );
  }
}

export default App;