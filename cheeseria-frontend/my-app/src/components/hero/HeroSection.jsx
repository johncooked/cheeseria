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
                            src="https://via.placeholder.com/1600x800"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Welcome to the PZ cheese catalogue!</h1>
                            <p>
                                Browse our wide selection of cheeses from around
                                the world.
                            </p>
                            <Button variant="warning" size="lg">
                                Browse All Cheese
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items for additional slides */}
                </Carousel>
            </Container>
        </section>
    );
}

export default HeroSection;
