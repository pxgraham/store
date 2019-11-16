import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_Fb1tZ7c3nbonv7czSogOSoXi00qypfwXOp">
        <div className="example">
          <Navbar />
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
