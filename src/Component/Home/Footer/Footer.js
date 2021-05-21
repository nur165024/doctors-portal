import React from 'react';
import './Footer.css';
import { FaFacebookF,FaGooglePlusG,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footerLink">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Emergency Dantal Care</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Treatment of Personal Diseases</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Tooth Extraction</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerLink">
                            <h5>Services</h5>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Emergency Dantal Care</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Treatment of Personal Diseases</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Tooth Extraction</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerLink">
                            <h5>Oral Health</h5>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Emergency Dantal Care</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Treatment of Personal Diseases</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Tooth Extraction</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Check Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footerLink">
                            <h5>Oral Health</h5>
                            <p>New York - 101010 Hudson Yards</p>
                        </div>
                        <div className="social-media-icon">
                            <FaFacebookF className="iconssocialmedia" />
                            <FaGooglePlusG className="iconssocialmedia" />
                            <FaTwitter className="iconssocialmedia" />
                        </div>
                        <div className="contact-number">
                            <p>Call Now</p>
                            <button className="btn btn primary btn-setColor">+45478545787</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;