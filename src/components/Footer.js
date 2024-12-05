import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #0F172B;
    color: #fff;
    padding-top: 5rem;
    margin-top: 5rem;
`;

const FooterInner = styled.div`
    padding: 5rem 0;
`;

const CustomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const SectionWrapper = styled.div`
    flex: 1 1 22%;
    min-width: 250px;
`;

const SectionTitle = styled.h4`
    font-family: "SecondaryFont", sans-serif;
    color: #FEA116;
    font-weight: normal;
    margin-bottom: 1rem;
    text-align: left;
`;

const FooterLink = styled.a`
    display: block;
    color: #fff;
    text-decoration: none;
    margin: 0.2rem 0;

    &:hover {
        color: #FEA116;
        text-decoration: underline;
    }
`;

const ContactInfo = styled.p`
    margin-bottom: 0.5rem;

    i {
        margin-right: 0.5rem;
    }
`;

const SocialButton = styled.a`
    border: 1px solid #fff;
    color: #fff;
    padding: 0.7rem 1em;
    margin-right: 0.5rem;
    border-radius: 50%;
    margin-top: 5px;

    &:hover {
        color: #FEA116;
        border-color: #FEA116;
    }
`;

const NewsletterForm = styled.div`
    position: relative;
    max-width: 400px;

    input {
        width: 100%;
        padding: 1rem;
        padding-right: 3rem;
        border: 1px solid #FEA116;
        border-radius: 0.25rem;
    }

    button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: #FEA116;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;

        &:hover {
            background-color: #FEA116;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner className={'px-5'} >
                <CustomWrapper className={'container-xl'}>
                    <SectionWrapper>
                        <SectionTitle>Company</SectionTitle>
                        <FooterLink href="#">About Us</FooterLink>
                        <FooterLink href="#">Contact Us</FooterLink>
                        <FooterLink href="#">Reservation</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms & Condition</FooterLink>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionTitle>Contact</SectionTitle>
                        <ContactInfo>
                            <i className="fa fa-map-marker-alt"></i>123 Street, New York, USA
                        </ContactInfo>
                        <ContactInfo>
                            <i className="fa fa-phone-alt"></i>+012 345 67890
                        </ContactInfo>
                        <ContactInfo>
                            <i className="fa fa-envelope"></i>info@example.com
                        </ContactInfo>
                        <div style={{marginTop: 16}}>
                            <SocialButton href="#">
                                <i className="fab fa-twitter"></i>
                            </SocialButton>
                            <SocialButton href="#">
                                <i className="fab fa-facebook-f"></i>
                            </SocialButton>
                            <SocialButton href="#">
                                <i className="fab fa-youtube"></i>
                            </SocialButton>
                            <SocialButton href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </SocialButton>
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionTitle>Opening</SectionTitle>
                        <p>Monday - Saturday: 09AM - 09PM</p>
                        <p>Sunday: 10AM - 08PM</p>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionTitle>Newsletter</SectionTitle>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <NewsletterForm>
                            <input type="text" placeholder="Your email" />
                            <button type="button">SignUp</button>
                        </NewsletterForm>
                    </SectionWrapper>
                </CustomWrapper>
            </FooterInner>
        </FooterContainer>
    );
};

export default Footer;
