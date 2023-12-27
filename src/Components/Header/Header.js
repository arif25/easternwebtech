import React from "react";
import '../Scss/HeaderFooter.scss';
import HeaderTop from "./HeaderTop";
import Navigation from "./Navigation";

const Header = () =>{
    return(
        <section className="sec-header">
            <aside className="asi-headtop">
                <HeaderTop />
            </aside>
            <aside className="asi-navigation">
                <Navigation />
            </aside>
        </section>
    );
}
export default Header;