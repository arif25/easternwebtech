
import clients01 from "../images/clients-01.jpg";
import clients02 from "../images/clients-02.jpg";
import clients03 from "../images/clients-03.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className='sec-testimonials'>
            <div className="container">
                <div className="title">
                    <div className="titleBig">
                        What Clients Say 
                    </div>
                </div>
                <div className="borderSecEnd"></div>
                <div className="details">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. unknown printe of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <div className='container'>
                <div className='bx-testi-carousel'>
                    <Carousel responsive={responsive}>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients01} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients02} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients03} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients01} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients02} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients03} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                        <div className='item'>
                            <div className='photo'>
                              <img src={clients01} />
                            </div>
                            <div className="itemtitle">
                              <div className="name">Shri Gopal Das </div>
                              <div className="job">Chairman - L.J.D. College - Falta</div>
                            </div>
                            <div className="code">"</div>
                            <div className="itemdetails">The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                        </div>
                    </Carousel>
              </div>
            </div>
        </section>
      );
}

export default Testimonials;