import React from "react";
import '../Components/Scss/Home.scss';
import Header from "./Header/Header";
import Banner from "./HomeBanner/Banner";
import StickyInquiryForm from "./StikyInquirtForm";

const Home = () =>{
    return(
        <section className="sec-home">
            <header>
                <Header />
            </header>
            <section className="sec-banner">
                <Banner />
            </section>
            <StickyInquiryForm />
        </section>
    );
}

export default Home;