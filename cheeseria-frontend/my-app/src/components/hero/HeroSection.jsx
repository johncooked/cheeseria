import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";

function HeroSection() {
    return (
        <section className="hero-section">
            <Container>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.spicesinmydna.com/wp-content/uploads/2018/11/Chocolate-and-Bourbon-Cheeseboard-10.jpg"
                            alt="First slide"
                            style={{
                                height: "50vh",
                                objectFit: "cover",
                                overflow: "hidden",
                            }}
                        />
                        <Carousel.Caption>
                            <h1>Welcome to the PZ cheese catalogue!</h1>
                            <p>
                                Browse our wide selection of cheeses from around
                                the world.
                            </p>
                            <a href="#all cheeses">
                                <Button variant="warning" size="lg">
                                    Browse All Cheese
                                </Button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default HeroSection;
