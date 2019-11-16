import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let price = this.props.price;
    let response = await fetch("/api/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id,
      amount: price
    });
  
    if (response.ok) {
      this.setState({complete: true});
    } else {
      this.setState({complete: 'error'});
    }
  }

  render() {
    if (this.state.complete) {
      return <h1>Purchase Complete <a href="/">go back home</a></h1>;
    } else if(this.state.complete === "error") {
      <h1>error. try using 4242 4242 4242 4242   04/42 424 42424 <a href="/">or go back home</a></h1>;
    }
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);