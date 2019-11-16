import React, { Component } from "react";
import Navbar from '../components/Navbar';
import "../App.css";

class NoMatch extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
      <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <a href="/">Return</a>
      </div>
      </div>
    );
  }
}

export default NoMatch;
