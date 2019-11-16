import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import "../App.css";
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import BuyButton from '../components/BuyButton';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="card-columns">
                        <div className="card">
                            {/* <img src={img1} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Hidden Blue Premier Package</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <BuyButton price={1000}/>
                            </div>
                        </div>
                        <div className="card p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p className="card-title">Hidden Blue Prime</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <BuyButton price={50000}/>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        This is extremely awesome - <cite title="Source Title">Peyton Graham</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            {/* <img src={img2} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Hidden Blue Premier Plus Package</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <BuyButton price={50}/>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card bg-primary text-white text-center p-3">
                            <blockquote className="blockquote mb-0">
                            <h5 className="card-title">The Hidden</h5>
                                <p>Our most extensive package yet...</p>
                                <BuyButton price={999999}/>
                                <footer className="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Hidden Blue Premier Plus Package Bonus Edition </h5>
                                <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                <BuyButton price={500}/>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        {/* <div className="card">
                            <img src={img3} className="card-img-top" alt="..." />
                        </div> */}
                        <div className="card p-3 text-right">
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <BuyButton price={1000}/>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hidden Inside Bundle</h5>
                                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <BuyButton price={1000}/>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hidden Inside Bundle</h5>
                                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <BuyButton price={1000}/>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hidden Inside Bundle</h5>
                                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <BuyButton price={1000}/>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
