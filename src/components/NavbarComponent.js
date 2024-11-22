import React, { useState, useEffect } from 'react';
import '../navbar.css';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // Store the current path

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

        // Update current path when user navigates
        const handlePathChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('scroll', handleScroll);

        // Update path on link click or history change (popstate)
        window.addEventListener('popstate', handlePathChange);

        // Cleanup event listeners when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handlePathChange);
        };
    }, []);

    const getHeading = () => {
        if (currentPath === '/') {
            return (
                    <div className="container my-5 py-5">
                        <div className={'row align-items-center g-5'}>
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita.
                                    Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                                    sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a href="/" className="btn colorB py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A
                                    Table</a>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="img/hero.png" alt=""/>
                            </div>
                        </div>
                    </div>
            );
        } else if (currentPath === '/about') {
            return (
                <div className=" hop my-5 pt-5 pb-4">
                    <div className=" text-center  w-auto">
                        <h1 className="display-3 text-white mb-3 animated  fw-bold">About Us</h1><br/>

                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item hp"><a href="#">Home</a></li>
                            <li className="breadcrumb-item hp"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>

                </div>

            )
        }
        return null;
    };

    return (
        <div className="container-xxl position-relative p-0">
            <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
                <div className="container">
                    <div className="logo w-50">
                        <a href="/">
                            <img src="img/logo.png" className={'w-50'} alt="Logo"/>
                        </a>
                    </div>
                    <div id="mainListDiv" className={`main_list ${isMenuOpen ? 'show_list' : ''}`}>
                        <ul className="navlinks">
                            <li><a href="/" onClick={() => setCurrentPath('/')}>Home</a></li>
                            <li><a href="/about" onClick={() => setCurrentPath('/about')}>About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
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

                        {getHeading()} {/* Display the heading based on the path */}
            </div>

        </div>
    );
};

export default NavbarComponent;
