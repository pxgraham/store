import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import "../App.css";

class Checkout extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
      <p>Your total is ${this.props.match.params.id}</p>
        <StripeProvider apiKey="pk_test_Fb1tZ7c3nbonv7czSogOSoXi00qypfwXOp">
          <div className="example">
            <Elements>
              <CheckoutForm price={this.props.match.params.id}/>
            </Elements>
          </div>
        </StripeProvider>
      </div>
      </div>
    );
  }
}

export default Checkout;
