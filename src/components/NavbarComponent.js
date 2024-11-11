import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components
const CustomNavbar = styled(Navbar)`
    background-color: #050744;
    background-image: url('https://path-to-your-uzbek-pattern-image.jpg'); /* Optional: Add Uzbek pattern image */
    background-size: cover;
    background-position: center;
    padding: 1rem 0;
    border-bottom: 2px solid #ffd700; /* Optional: Adding a gold border for a more vibrant look */
`;

const Logo = styled.img`
    width: 150px; /* Default logo size */
    height: auto;
    display: block;
`;

const CustomNavLink = styled(Nav.Link)`
    color: #ffffff !important;
    font-family: 'Arial', sans-serif; /* You can replace this with an Uzbek-style font */
    font-size: 18px;
    &:hover {
        color: #ffd700 !important; /* Gold hover color for emphasis */
    }
`;

const NavbarComponent = () => {
    return (
        <CustomNavbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    {/* You can add your logo here if available */}
                    Uzbegim
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <CustomNavLink href="#home">Home</CustomNavLink>
                        <CustomNavLink href="#about">About</CustomNavLink>
                        <CustomNavLink href="#services">Services</CustomNavLink>
                        <CustomNavLink href="#contact">Contact</CustomNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </CustomNavbar>
    );
};

export default NavbarComponent;
