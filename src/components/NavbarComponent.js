import React, { useState, useEffect } from 'react';
import '../navbar.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Add 'affix' class on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Get heading based on the current path
    const getHeading = () => {
        const headings = {
            '/': (
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">
                                Enjoy Our<br />Delicious Meal
                            </h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">
                                Tempor erat elitr rebum at clita...
                            </p>
                            <Link to="/" className="btn colorB py-sm-3 px-sm-5 me-3 animated slideInLeft">
                                Book A Table
                            </Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt="Delicious Meal" />
                        </div>
                    </div>
                </div>
            ),
            '/about': (
                <PageHeader title="About Us" breadcrumb={[{ path: "/", label: "Home" }, { path: "#", label: "Pages" }, { active: true, label: "About" }]} />
            ),
            '/menu': (
                <PageHeader title="Menu" breadcrumb={[{ path: "/", label: "Home" }, { path: "#", label: "Pages" }, { active: true, label: "Menu" }]} />
            ),
            '/service': (
                <PageHeader title="Service" breadcrumb={[{ path: "/", label: "Home" }, { path: "#", label: "Pages" }, { active: true, label: "Service" }]} />
            ),
            '/contact': (
                <PageHeader title="Contact" breadcrumb={[{ path: "/", label: "Home" }, { path: "#", label: "Pages" }, { active: true, label: "Contact" }]} />
            )
        };
        return headings[location.pathname] || null;
    };

    return (
        <div className="container-xxl position-relative p-0">
            <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
                <div className="container">
                    <div className="logo w-50">
                        <Link to="/">
                            <img src="img/logo.png" className="w-50" alt="Logo" />
                        </Link>
                    </div>
                    <div id="mainListDiv" className={`main_list ${isMenuOpen ? 'show_list' : ''}`}>
                        <ul className="navlinks">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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

// Reusable Page Header Component
const PageHeader = ({ title, breadcrumb }) => (
    <div className="hop my-5 pt-5 pb-4">
        <div className="text-center w-auto">
            <h1 className="display-3 text-white mb-3 animated fw-bold">{title}</h1><br />
        </div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
                {breadcrumb.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${item.active ? 'text-white active' : 'hp'}`}>
                        {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
                    </li>
                ))}
            </ol>
        </nav>
    </div>
);

export default NavbarComponent;
