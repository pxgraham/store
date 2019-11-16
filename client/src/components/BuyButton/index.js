import React, {Component} from 'react';

class BuyButton extends Component {

  render() {
    return (
        <div className="border" style={{padding: '3px'}}>
            <p className="text-dark text-center">${this.props.price}.00</p>
            <hr />
            <a 
              className="btn btn-success bg-light text-success text-center btn-lg" 
              role="button" 
              href={'/checkout/' + this.props.price}
              style={{width: '100%'}}
            >
              Buy now!
            </a>
        </div>
    )
  }
}

export default BuyButton;
