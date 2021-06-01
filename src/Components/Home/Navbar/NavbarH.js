import React from 'react';
import logo from '../../../Image & Icon/bodyflexGym-removebg.png';
import { Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import './NavbarH.css';

const NavbarH = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">

                <Navbar.Brand href="/home">
                    <Link to="/home">
                        <img
                            className="navbar-brand logo"
                            src={logo}
                            alt="gorilla_gym"
                        />
                    </Link>
                </Navbar.Brand>

               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">

                   

                  
                    <Nav className="ml-auto">


<Nav.Item className='navBarSpacing bameshor'>
                            <Link className="nav-link mr-5" to="/">
                                <div className="nav-link mr-5  text-white">
                                    Home
                                </div>
                            </Link>
                        </Nav.Item>


                        <Nav.Item className='navBarSpacing'>
                            <Link className="nav-link mr-5" to="/home#aboutUs">
                                <div className="nav-link mr-5  text-white">
                                    About us
                                </div>
                            </Link>
                        </Nav.Item>

                        <Nav.Item className='navBarSpacing'>
                            <Link className="nav-link mr-5" to="/ourClasses">
                                <div className="nav-link mr-5  text-white">
                                    Our Classes
                               </div>
                            </Link>
                        </Nav.Item>


                        <Nav.Item className='navBarSpacing'>
                            <Link className="nav-link mr-5" to="/home#footer">
                                <div className="nav-link mr-5  text-white">
                                    Blogs
                               </div>
                            </Link>
                        </Nav.Item>


                        <Nav.Item className='navBarSpacing'>
                            <Link className="nav-link mr-5" to="/home#footer">
                                <div className="nav-link mr-5  text-white">
                                    Contacts
                            </div>
                            </Link>
                        </Nav.Item>

                       


                    </Nav>
                
                </Navbar.Collapse>


            </Navbar>


        </div>
    );
};

export default NavbarH;