import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/checkout/:id" component={Checkout} />
            {/* <Route exact path="/books" component={Books} /> */}
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
