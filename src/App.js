import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import BasicLayout from './basiclayout';
import Norlog from "./pages/norlog";
const ROUTE_NORLOG = `/norlog`;


class App extends Component {

  state = {
    nav: false
  }

  updateNav = (f) => {
    if(f === true){
      this.setState({ nav: false });
    }else{
      this.setState({ nav: true });
    }
  }


  render() {
    return (
      <div className="App">
        <BasicLayout/>
      </div>
    );
  }
}

export default App;
