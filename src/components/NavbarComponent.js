import React, { useState, useEffect } from 'react';
import '../navbar.css';
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // This will give the current path

    // Handle the menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle the scroll event to add/remove the 'affix' class
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getHeading = () => {
        if (location.pathname === '/') {
            return (
                <div className="container my-5 py-5">
                    <div className={'row align-items-center g-5'}>
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita...</p>
                            <Link to="/" className="btn colorB py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            );
        } else if (location.pathname === '/about') {
            return (
                <div className="hop my-5 pt-5 pb-4">
                    <div className=" text-center  w-auto">
                        <h1 className="display-3 text-white mb-3 animated fw-bold">About Us</h1><br/>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item hp"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item hp"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="container-xxl position-relative p-0">
            <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
                <div className="container">
                    <div className="logo w-50">
                        <Link to="/">
                            <img src="img/logo.png" className={'w-50'} alt="Logo"/>
                        </Link>
                    </div>
                    <div id="mainListDiv" className={`main_list ${isMenuOpen ? 'show_list' : ''}`}>
                        <ul className="navlinks">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="/Service">Services</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <span className="navTrigger" onClick={toggleMenu}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                {getHeading()}
            </div>
        </div>
    );
};


export default NavbarComponent;
