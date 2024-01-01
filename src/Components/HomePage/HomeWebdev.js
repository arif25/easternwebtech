import imgwebdev02 from '../images/imgwebdev-02.png';

const HomeWebdev =()=>{
    return(
        <section className="sec-homewebdev">
            <div className="container">
                <div className="bx-content-web-dev">
                    <div className="image-webdev">
                        <img src={imgwebdev02} />
                    </div>
                    <div className="content-webdev">
                        <div className="title-webdev">Website Design</div>
                        <div className="details-webdev">The websites we produce are clean and fresh, each uniquely designed. Furthermore, we endeavor to ensure all our sites meet the accessibility standards demanded by the World Wide Web Consortium. Our websites are tested in the most commonly used browsers at different screen resolutions. 
                        </div>
                        <div className="btn-webdev">
                            <a href="#">understand more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeWebdev;