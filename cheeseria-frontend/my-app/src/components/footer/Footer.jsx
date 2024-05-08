import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar sticky="bottom" bg="dark" variant="dark">
            <Container>
                <Navbar.Text>
                    © {new Date().getFullYear()} PZ Cheeseria
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
