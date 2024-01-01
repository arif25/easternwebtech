import lw01 from "../images/lw01.jpg";

const HomeLatestWork = () =>{
    return(
        <section className="sec-HomeLatestWork">
            <div className="container">
                <div className="titleLatestWorks">Latest Works</div>
            </div>
            <div className="container">
                <div className="bx-HomeLatestWork">
                    <ul>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of edu ca tion – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                        <li>
                            <div className="imgbx">
                                <img src={lw01} />
                            </div>
                            <div className="projectName">The national council of education – bengal</div>
                            <div className="btn-latestworks">View Details</div>
                        </li>
                    </ul>
                    <div className="btnviewall">
                        <a href="#">view all</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeLatestWork;