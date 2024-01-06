import footface from '../images/facebook.png';

const Footer = ()=>{
    return(
        <footer>
            <section className='sec-foottop'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='foot-aboutus'>
                                <div className='title'>About Us</div>
                                <div className='content'>
                                    Eastern Bytes excels at custom design and front end development. We love taking on challenging projects that require full-on content strategy, thoughtful design, demanding development, and ongoing marketing.
                                </div>
                                <div className='details-add-ph'>
                                Eastern Bytes is located in Kolkata, North East India. <br />
                                Tel: +91 98310 81661
                                </div>
                                <div className='social-links'>
                                    <a href='#'>f</a>
                                    <a href='#'>t</a>
                                    <a href='#'>i</a>
                                    <a href='#'>y</a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='foot-quick-contact'>
                                <div className='title'>Quick Contact</div>
                                <form>
                                    <input type='text' placeholder='Your Name : ' />
                                    <input type='text' placeholder='E-mail : ' />
                                    <input type='text' placeholder='Subject : ' />
                                    <textarea placeholder='Message'></textarea>
                                </form>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='foot-face'>                            
                                <div className='title'>Quick Contact</div>
                                <div className='bx-facebook'>
                                    <a href='#'>
                                        <img src={ footface } />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='foot-newsletter'>                            
                                <div className='title'>Newsletter</div>
                                <div className='bx-newsletter'>
                                    <div className='content'>
                                        Join our mailing list to receive news and announcements
                                    </div>
                                    <div className='input-newsletter'>
                                        <input type='text' />
                                    </div>
                                    <div className='btn-newsletter'>
                                        <a href='#'>Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='foot-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p>Eastern Bytes © 2017, All Rights Reserved.</p>
                        </div>
                        <div className='col'>
                            <div className='copyright-links'>
                                <ul>
                                    <li>
                                        <a href='#'>About us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Services</a>
                                    </li>
                                    <li>
                                        <a href='#'>Portfolio</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;