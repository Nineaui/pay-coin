import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './../App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Imgcoin from './../coinbase.png';
import Macbook from './../macbook.png';
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="coinIntro">
          <h2 className="conTitle">Personal crypto helper</h2>
          <h4 className="content">Securely auto-sync your transactions.</h4>
          <a href="https://www.coinbase.com/oauth/authorize/oauth_signin?client_id=fa0e6e2478b02335b4eab7e1796945448fa1e33ca61df2103b59152e28c10085&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fauthorize&response_type=code&scope=wallet:user:email,wallet:accounts:read">
          <Button type="dashed" className="buttonabout">
            {" "}
            <img
              src={Imgcoin}
              alt="pic"
              style={{ height: "45%" }}
            />{" "}
            Continue with Coinbase
          </Button>
          <div className="contentmore">You will be redirected to Coinbase.</div>
          </a>
          <Button type="primary" className="buttonabout">
          <Link to="/signup" className="navsignup"> Sign Up with Email</Link>
        </Button>
        </div>
        <div className="introImg">
          <img src={Macbook} alt="pic" />
        </div>
      </div>
    );
  }
}

export default Home;
