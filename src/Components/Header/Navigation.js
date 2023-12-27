import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import logoBlack from '../images/logo-black.png';
import logoWhite from '../images/logo-white.png';

const Navigation = () =>{
    return(
        <section className="sec-navigation">
            <div className="container">
                <div className="row">
                    <Navbar expand="lg" className="">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logoWhite} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Website Design
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    WordPress Website
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Ecommerce Website
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Custom CMS Websites
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">
                                    Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.6">
                                    SEO Optimization
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.6">
                                    Online Marketing
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Nav.Link href="#Customer">Customer Support</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
            </div>
        </section>
    );
}

export default Navigation;