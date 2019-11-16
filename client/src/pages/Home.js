import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        {/* <StripeProvider apiKey="pk_test_Fb1tZ7c3nbonv7czSogOSoXi00qypfwXOp">
          <div className="example">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider> */}
      </div>
      </div>
    );
  }
}

export default Home;
