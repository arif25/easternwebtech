
import moc01e4 from "../images/moc01-e4.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faWindowRestore, faLayerGroup, faMobileAlt, faCode, faCogs, faClone } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF} from '@fortawesome/free-brands-svg-icons';
const fontfaDesktop = <FontAwesomeIcon icon={faDesktop} />
const fontfaMobileAlt = <FontAwesomeIcon icon={faMobileAlt} />
const fontfaCode = <FontAwesomeIcon icon={faCode} />
const fontfaCogs = <FontAwesomeIcon icon={faCogs} />
const fontfaClone = <FontAwesomeIcon icon={faClone} />
const HomeResponsive = () =>{
    return(
        <section className="sec-HomeResponsive">
            <div className="container">
                <div className="title">
                    <div className="res-title-bold">RESPONSIVE DESIGN</div>
                    <div className="res-title-normal">ON BOTH MOBILE & DESKTOP</div>
                </div>
            </div>
            <div className="container">
                <div className="bx-home-responsive">
                    <div className="left-home-responsive">
                        <ul>
                            <li>
                                <div className="bx-itemResponsive">
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>
                                    <div className="icon-itemResponsive">
                                        {fontfaDesktop}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-itemResponsive">
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>
                                    <div className="icon-itemResponsive">
                                    {fontfaMobileAlt}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-itemResponsive">
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>
                                    <div className="icon-itemResponsive">
                                    {fontfaCode}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="img-home-responsive">
                        <img src={ moc01e4 } />
                    </div>
                    <div className="right-home-responsive">
                        <ul>
                            <li>
                                <div className="bx-itemResponsive">    
                                    <div className="icon-itemResponsive">
                                        {fontfaCogs}
                                    </div>
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>                                
                                </div>
                            </li>
                            <li>
                                <div className="bx-itemResponsive">
                                    <div className="icon-itemResponsive">
                                        {fontfaClone}
                                    </div>
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-itemResponsive">
                                    <div className="icon-itemResponsive">
                                        {fontfaMobileAlt} 
                                    </div>
                                    <div className="details-itemResponsive">
                                        <div className="title-itemResponsive">PREMIUM DEVELOPMENT</div>
                                        <div className="para-itemResponsive">An emphasis on cutting-edge design and modern usability standards</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeResponsive;