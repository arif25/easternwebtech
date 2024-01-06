import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import clients1 from '../images/client-logo-01.png';
import clients2 from '../images/client-logo-02.png';
import clients3 from '../images/client-logo-03.png';
import clients4 from '../images/client-logo-04.png';
import clients5 from '../images/client-logo-05.png';
import clients6 from '../images/client-logo-06.png';
import clients7 from '../images/client-logo-07.png';

const OurClients = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
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
                        Our Clients 
                    </div>
                </div>
                <div className="borderSecEnd"></div>
                <div className='bx-testimonials'>
                  <Carousel responsive={responsive}>
                      <div className='item'>
                        <img src={clients1} />
                      </div>
                      <div className='item'>
                        <img src={clients2} />
                      </div>
                      <div className='item'>
                        <img src={clients3} />
                      </div>
                      <div className='item'>
                        <img src={clients4} />
                      </div>
                      <div className='item'>
                        <img src={clients5} />
                      </div>
                      <div className='item'>
                        <img src={clients6} />
                      </div>
                      <div className='item'>
                        <img src={clients7} />
                      </div>
                  </Carousel>
              </div>
            </div>
        </section>
      );
}

export default OurClients;