import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import {  faFacebookF, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const fontCoffee = <FontAwesomeIcon icon={faCoffee} />
const fontFacebookF = <FontAwesomeIcon icon={faFacebookF} />
const fontTwitter = <FontAwesomeIcon icon={faXTwitter} />
const fontLinkedin = <FontAwesomeIcon icon={faLinkedin} />
const fontYoutube = <FontAwesomeIcon icon={faYoutube} />

const HeaderTop = () =>{
    return(
        <section className="sec-header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="service-requiest-support">
                            <ul>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Request a quote</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="log-sign-socialicons">
                            <div className="log-sign">
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <a href="#">
                                            {fontFacebookF}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            {fontTwitter}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            {fontLinkedin}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            {fontYoutube}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeaderTop;