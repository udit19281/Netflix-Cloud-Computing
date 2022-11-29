import "./App.css";
import React from "react";


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
          <Route path="/" element = {<LoginPage/>} / >
          <Route path="/products/*" element = {<ProductsPage/>} /> 
          <Route path="/cart/*" element = {<CartPage/>} /> 
        </Routes>
      </Router>
      );
  }
}

export default App;