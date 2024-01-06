import React from "react";
import '../Components/Scss/Home.scss';
import Header from "./Header/Header";
import Banner from "./HomePage/HomeBanner/Banner";
import StickyInquiryForm from "./StikyInquirtForm";
import Testimonials from "./HomePage/Testimonials";
import OurClients from "./HomePage/OurClients";
import HomeAboutus from "./HomePage/HomeAboutus";
import HomeServices from "./HomePage/HomeServices";
import HomeProgressNumber from "./HomePage/HomeProgressNUmber";
import HomeWebdesign from "./HomePage/HomeWebdesign";
import HomeWebdev from "./HomePage/HomeWebdev";
import HomeChooseus from "./HomePage/HomeWhyChooseus";
import HomeResponsive from "./HomePage/HomeResponsive";
import HomeOurProcess from "./HomePage/HomeOurProcess";  
import HomeLatestWork from "./HomePage/HomeLatestWork";
import Startsyourproject from "./HomePage/Startsyourproject";
import Footer from "./Header/Footer";

const Home = () =>{
    return(
        <section className="sec-home">
            <header>
                <Header />
            </header>
            <section className="sec-banner">
                <Banner />
            </section>
            <section className="HomeAboutus">
                <HomeAboutus />
            </section>
            <section className="HomeServices">
                <HomeServices />
            </section>
            <section className="HomeProgressNumber">
                <HomeProgressNumber />
            </section>
            <section className="HomeWebdesign">
                <HomeWebdesign />
            </section>
            <section className="HomeWebdesign">
                <HomeWebdev />
            </section>
            <section className="HomeChooseus">
                <HomeChooseus />
            </section>
            <section className="HomeResponsive">
                <HomeResponsive />
            </section>
            <section className="HomeOurProcess">
                <HomeOurProcess />
            </section>
            <section className="HomeLatestWork">
                <HomeLatestWork />
            </section>
            <section className="testimonials">
                <Testimonials />
            </section>
            <section className="OurClients">
                <OurClients />
            </section>
            <section className="StickyInquiryForm">
                <StickyInquiryForm />
            </section>
            <section className="Startsyourproject">
                <Startsyourproject />
            </section>
            <section className="">
                <Footer />
            </section>
        </section>
    );
}

export default Home;