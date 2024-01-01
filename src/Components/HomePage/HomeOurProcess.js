

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const fontfaSearch = <FontAwesomeIcon icon={faSearch} />

const HomeOurProcess = () =>{
    return(
        <section className="sec-HomeOurProcess">
            <div className="container">
                <div className="title">
                    <div className="titleBig">
                        OUR PROCESS
                    </div>
                </div>
                <div className="borderSecEnd"></div>
            </div>
            <div className="container">
                <div className="bx-HomeOurProcess">
                    <ul>
                        <li>
                            <div className="bx-item-ourProcess">
                                <div className="icon">{fontfaSearch}</div>
                                <div className="title">Planning</div>
                                <div className="text">Understanding what you want out of your site and how do you plant to implement it.</div>
                                <div className="option">Option 1</div>
                            </div>
                        </li>
                        <li>
                            <div className="bx-item-ourProcess">
                                <div className="icon">{fontfaSearch}</div>
                                <div className="title">Design</div>
                                <div className="text">Understanding what you want out of your site and how do you plant to implement it.</div>
                                <div className="option">Option 1</div>
                            </div>
                        </li>
                        <li>
                            <div className="bx-item-ourProcess">
                                <div className="icon">{fontfaSearch}</div>
                                <div className="title">Development</div>
                                <div className="text">Understanding what you want out of your site and how do you plant to implement it.</div>
                                <div className="option">Option 1</div>
                            </div>
                        </li>
                        <li>
                            <div className="bx-item-ourProcess">
                                <div className="icon">{fontfaSearch}</div>
                                <div className="title">Lunch</div>
                                <div className="text">Understanding what you want out of your site and how do you plant to implement it.</div>
                                <div className="option">Option 1</div>
                            </div>
                        </li>
                        <li>
                            <div className="bx-item-ourProcess">
                                <div className="icon">{fontfaSearch}</div>
                                <div className="title">Maintanance</div>
                                <div className="text">Understanding what you want out of your site and how do you plant to implement it.</div>
                                <div className="option">Option 1</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeOurProcess;