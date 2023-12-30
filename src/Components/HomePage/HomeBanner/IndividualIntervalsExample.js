import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';

function IndividualIntervalsExample() {
  return (    
    <section className='sec-banner-carousel'>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className='carousel-img'>
              <img src={banner1} />
          </div>
          <Carousel.Caption>
            <h3>Start up & <br /> Never stop </h3>
            <p>We are a creative agency with a passion for design. Our methodical approach is focused on revealing the essence of each design challenge to allow us to create holistic and durable solutions. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-img'>
            <img src={banner2} />
          </div>
          <Carousel.Caption>
            <h3>Expect nothing <br />less than perfect</h3>
            <p> Responsive designs have allowed users to take one website and fit onto any screen size. Website design trends are meeting more of a theatrical and cinematic based experience. Finding creative ways for users to navigate your site will continue to keep them more interested. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-img'>
            <img src={banner3} />
          </div>
          <Carousel.Caption>
            <h3>A True Business Partner</h3>
            <p>We create meaningful websites that offer simplistic user experiences, achieve high rankings on the most popular search engines and promote your brand to the widest possible audience.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;