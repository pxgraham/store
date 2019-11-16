import React, {Component} from 'react';

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a href="/" className="navbar-brand text-light">Hidden Blue Shop</a>
            {/* <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
        </nav>
    )
  }
}

export default Navbar;