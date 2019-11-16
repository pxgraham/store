import React, {Component} from 'react';

class Jumbotron extends Component {

  render() {
    return (
         <div className="jumbotron bg-light">
            <p className="lead">Welcome to Hidden Blue Inside! The one stop shop for your entertainment and enjoyment needs.</p>
            <hr className="my-4" />
            <p>Check out our products and services</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/shop" role="button">Shop Now</a>
            </p>
        </div> 
    )
  }
}

export default Jumbotron;
