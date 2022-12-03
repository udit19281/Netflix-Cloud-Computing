import "./App.css";
import React from "react";
import LoginPage from "./LoginPage";
import Videos from "./Videos";
import Landing from "./landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-screen h-screen overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
