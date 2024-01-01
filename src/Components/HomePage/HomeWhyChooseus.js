import whyChooseUsEasternbytes from "../images/why-choose-us-easternbytes.jpg";

const HomeChooseus = () => {
    return(
        <section className="sec-HomeChooseus">
            <div className="container">
                <div className="title">
                    <div className="titleBig">
                        Why Choose us
                    </div>
                </div>
                <div className="borderSecEnd"></div>
            </div>
            <div className="container">
                <div className="bx-content-chooseus">
                    <div className="img-chooseus">
                        <img src={whyChooseUsEasternbytes} />
                    </div>
                    <div className="content-chooseus">
                        <ul>
                            <li>Strong focus on business requirements and ROI</li>
                            <li>The Websites we make are optimized</li>
                            <li>Our Agile Methodology of development is proven and effective</li>
                            <li>No compromise on quality of website </li>
                            <li>We’re quick to response to the clients need</li>
                            <li>Delivering services and solutions right for your business</li>
                            <li>No worrying as we have an expert web development team</li>
                            <li>Our web developers are experienced and certified</li>
                            <li>We build responsive websites that auto adapt to device screens</li>
                            <li>Extensive project management experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeChooseus;