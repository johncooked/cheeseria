import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import HeroSection from "../../components/hero/HeroSection";

const Home = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <HeroSection></HeroSection>
                </Row>
            </Col>
        </Container>
    );
};

export default Home;
