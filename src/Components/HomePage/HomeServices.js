import React from "react";
import { render } from "react-dom";
import imgServices from "../images/services.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faWindowRestore, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF} from '@fortawesome/free-brands-svg-icons';

const fontfaDesktop = <FontAwesomeIcon icon={faDesktop} />
const fontfaWindowRestore = <FontAwesomeIcon icon={faWindowRestore} />
const fontfaLayerGroup = <FontAwesomeIcon icon={faLayerGroup} />

const HomeServices = () => {
    return(
        <section className="sec-homeOurservices">
            <div className="container">
                <div className="title">
                    <div className="titleBig">
                       Our <strong>Services</strong>
                    </div>
                </div>
                <div className="details">
                    <p>
                        We create custom-built, marketing-driven website solutions and online environments that ensure your brand delivers on form and functionality.
                    </p>
                </div>
                <div className="borderSecEnd"></div>
                <div className="details">
                    <p>
                        We offer a wide range of Digital Marketing & Web Development Services. Our services include web design, web development, Social media marketing, SEO & more.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="contentServices">
                    <div className="leftServices">
                        <ul>
                            <li>
                                <div className="icon">{fontfaDesktop}</div>
                                <div className="titleItem">Website Design</div>
                                <div className="titleDetails">EasyDesign will work with you to find out what you need from your website</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                            <li>
                                <div className="icon">{fontfaWindowRestore}</div>
                                <div className="titleItem">Web Development</div>
                                <div className="titleDetails">We offer web development services for any kind of business or industry</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                            <li>
                                <div className="icon">{fontfaLayerGroup}</div>
                                <div className="titleItem">SEO Optimization</div>
                                <div className="titleDetails">Drive qualified traffic to your website and maximize ROI with SEO optimization</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                        </ul>
                    </div>
                    <div className="imgServices">
                        <img src={imgServices} />
                    </div>
                    <div className="rightServices">
                        <ul>
                            <li>
                                <div className="icon">{fontfaDesktop}</div>
                                <div className="titleItem">Website Design</div>
                                <div className="titleDetails">EasyDesign will work with you to find out what you need from your website</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                            <li>
                                <div className="icon">{fontfaWindowRestore}</div>
                                <div className="titleItem">Web Development</div>
                                <div className="titleDetails">We offer web development services for any kind of business or industry</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                            <li>
                                <div className="icon">{fontfaLayerGroup}</div>
                                <div className="titleItem">SEO Optimization</div>
                                <div className="titleDetails">Drive qualified traffic to your website and maximize ROI with SEO optimization</div>
                                <div className="titleBtn">Read More</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeServices;