import React, { Component } from "react";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Img from "./coin.png";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Currencies from "./pages/currencies";
import CoinChart from "./pages/coin";
import Norlog from "./pages/norlog";
const { Header} = Layout;
const ROUTE_SIGNUP = `/signup`,
  ROUTE_HOME = `/home`,
  ROUTE_CUR = `/currencies`,
  ROUTE_SIGNIN = `/signin`,
  ROUTE_COIN = `/coin`,
  ROUTE_NORLOG = `/norlog`;

class BasicLayout extends React.Component {

  render(){
    return(  <Layout >
        <Router >
          <div className="all">
            <div className="nav">

            <Link to="/home" className="navhome">
            <img src={Img} alt="pic"/>
            crypto-tracker</Link>
              <Link to="/currencies" className="navcurrent">Currencies</Link>
              <Link to="/signup" className="navsignup">Sign up</Link>
              <Link to="/signin" className="navsignin">Sign in</Link>
            </div>
            <div className="content">
            <Route path={ROUTE_SIGNUP} component={Signup} />
            <Route path={ROUTE_SIGNIN} component={Signin} />
            <Route path={ROUTE_HOME} component={Home} />
            <Route path={ROUTE_CUR} component={Currencies}/>
            <Route path={ROUTE_COIN} component={CoinChart}/>
            </div>
          </div>
        </Router>

      </Layout>)
  }
}


export default BasicLayout;
