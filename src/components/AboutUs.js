import React from 'react';
import '../css/Navbar.css'
import '../css/Button.css'
const AboutUs = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="About Us 1" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" style={{ marginTop: '25%' }} alt="About Us 2" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt="About Us 3" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt="About Us 4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 holo">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to  <i className="fa fa-utensils text-primary me-2"></i>Uzbegim</h1>
                        <p className="mb-4">Welcome to Uzbegim, where the vibrant flavours and rich traditions of Uzbekistan come alive in the heart of London.
                            Our menu celebrates authentic Uzbek cuisine, from fragrant Pilaf to tender Manti, all crafted with the freshest ingredients and a passion for tradition. At Uzbegim, dining is more than a meal—it’s an experience.
                        </p>
                        <p className="mb-4">Immerse yourself in our warm Uzbek hospitality, surrounded by handcrafted décor and a welcoming atmosphere. Whether it’s a casual lunch or a special celebration, Uzbegim is where memories are made.
                            We can’t wait to share the flavours and stories of Uzbekistan with you.</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 a display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
