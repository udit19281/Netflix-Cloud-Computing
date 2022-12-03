import "./App.css";
import React from "react";
import LoginPage from "./LoginPage";
import Videos from "./Videos";
import Landing from "./landing";
import SignUp from "./SignUp";
import Recommendation from "./Recommendation";

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
      <div className="w-screen h-screen overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element = {<Landing/>} / >
          <Route path="/log_in" element = {<LoginPage />} / >
          <Route path="/videos" element = {<Videos />} / >
          <Route path="/sign_up" element = {<SignUp />} / >
          <Route path="/recommendation" element = {<Recommendation />} / >
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
