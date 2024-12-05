import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TeamSection = () => {
    const teamMembers = [
        { id: 1, name: "Full Name", designation: "Designation", img: "img/team-1.jpg", delay: "0.1s" },
        { id: 2, name: "Full Name", designation: "Designation", img: "img/team-2.jpg", delay: "0.3s" },
        { id: 3, name: "Full Name", designation: "Designation", img: "img/team-3.jpg", delay: "0.5s" },
        { id: 4, name: "Full Name", designation: "Designation", img: "img/team-4.jpg", delay: "0.7s" },
    ];

    return (
        <Container fluid className="pt-5 pb-3">
            <Container>

            </Container>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                    Team Members
                </h5>
                <h1 className="mb-5">Our Master Chefs</h1>
            </div>
            <Row className="g-4">
                {teamMembers.map((member) => (
                    <Col
                        key={member.id}
                        lg={3}
                        md={6}
                        className="wow fadeInUp"
                        data-wow-delay={member.delay}
                    >
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={member.img} alt={member.name}/>
                            </div>
                            <h5 className="mb-0">{member.name}</h5>
                            <small>{member.designation}</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Button className="btn-square btn-primary mx-1" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </Button>
                                <Button className="btn-square btn-primary mx-1" href="">
                                    <i className="fab fa-twitter"></i>
                                </Button>
                                <Button className="btn-square btn-primary mx-1" href="">
                                    <i className="fab fa-instagram"></i>
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TeamSection;
