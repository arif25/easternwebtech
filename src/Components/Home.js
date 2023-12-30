import React from "react";
import '../Components/Scss/Home.scss';
import Header from "./Header/Header";
import Banner from "./HomePage/HomeBanner/Banner";
import StickyInquiryForm from "./StikyInquirtForm";
import Testimonials from "./Testimonials";
import OurClients from "./OurClients";
import HomeAboutus from "./HomePage/HomeAboutus";
import HomeServices from "./HomePage/HomeServices";
import HomeProgressNumber from "./HomePage/HomeProgressNUmber";

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
            <section className="testimonials">
                <Testimonials />
            </section>
            <section className="OurClients">
                <OurClients />
            </section>
            <section className="StickyInquiryForm">
                <StickyInquiryForm />
            </section>
            <section className="HomeProgressNumber">
                <HomeProgressNumber />
            </section>
        </section>
    );
}

export default Home;