import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth } from "../auth/AuthContext";

import LoginModal from "../modal/LoginModal";
import SignupModal from "../modal/SignupModal";

function TopNav() {
    // Simulate login functions for Admin
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const { isLoggedIn, login, logout } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username === "admin" && password === "password") {
            login();
            setShowLoginModal(false);
        } else {
            // Handle invalid credentials
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        logout();
    };
    ////////////////////////////////////

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-body-tertiary"
                data-bs-theme="light"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#">PZ Cheeseria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Link 1</Nav.Link>
                            <Nav.Link>Link 2</Nav.Link>
                            <Nav.Link>Link 3</Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn ? (
                                <NavDropdown title="Admin">
                                    <NavDropdown.Item href="#action/3.1">
                                        Action 1
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Action 2
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Action 3
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav>
                                    <Nav.Link
                                        onClick={() => setShowLoginModal(true)}
                                    >
                                        Login
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() => setShowSignupModal(true)}
                                    >
                                        Sign Up
                                    </Nav.Link>
                                </Nav>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                show={showLoginModal}
                handleLogin={handleLogin}
                handleClose={() => setShowLoginModal(false)}
            ></LoginModal>
            <SignupModal
                show={showSignupModal}
                handleClose={() => setShowSignupModal(false)}
            ></SignupModal>
        </>
    );
}

export default TopNav;
