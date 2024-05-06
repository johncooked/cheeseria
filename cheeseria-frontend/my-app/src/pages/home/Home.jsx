import React, { useState } from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";

import HeroSection from "../../components/hero/HeroSection";
import CheeseCard from "../../components/cheesecard/CheeseCard";
import PlaceholderCheeseCard from "../../components/placeholder/PlaceholderCheeseCard";

const Home = () => {
    // Keep track of the 5 most recently viewed cheeses
    // Only track the current instance
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    const handleCardClick = (cheese) => {
        console.log(cheese);

        const updatedRecentlyViewed = [cheese, ...recentlyViewed.slice(0, 4)];

        if (updatedRecentlyViewed.length > 5) {
            updatedRecentlyViewed.pop();
        }

        setRecentlyViewed(updatedRecentlyViewed);
        console.log("Recently viewed:", updatedRecentlyViewed);
    };

    const dummyCheeses = [
        {
            id: 1,
            name: "Cheddar",
            img: "https://via.placeholder.com/150",
            pricePerKilo: 10.99,
            color: "Yellow",
        },
        {
            id: 2,
            name: "Brie",
            img: "https://via.placeholder.com/150",
            pricePerKilo: 15.99,
            color: "White",
        },
        {
            id: 3,
            name: "Gouda",
            img: "https://via.placeholder.com/150",
            pricePerKilo: 12.49,
            color: "Yellow",
        },
        {
            id: 4,
            name: "Gouda",
            img: "https://via.placeholder.com/150",
            pricePerKilo: 12.49,
            color: "Yellow",
        },
        {
            id: 5,
            name: "Gouda",
            img: "https://via.placeholder.com/150",
            pricePerKilo: 12.49,
            color: "Yellow",
        },
    ];

    // Render placeholder cards
    const generateCols = (count) => {
        return Array.from({ length: count }).map((_, idx) => (
            <Col key={idx}>
                <PlaceholderCheeseCard />
            </Col>
        ));
    };

    return (
        <Container>
            <HeroSection />
            <Container style={{ paddingTop: "40px" }}>
                <h2>Recently viewed</h2>
            </Container>
            {recentlyViewed.length > 0 ? (
                <Container>
                    <Row xs={1} md={2} lg={5} className="g-4">
                        {recentlyViewed.map((cheese, idx) => (
                            <Col key={idx}>
                                <CheeseCard
                                    cheese={cheese}
                                    onClick={handleCardClick}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <Container>
                    <p>No recently viewed items.</p>
                </Container>
            )}
            <Container style={{ paddingTop: "40px" }}>
                <h2>Popular cheeses (Placeholder)</h2>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {generateCols(5)}
                </Row>
            </Container>
            <Container style={{ paddingTop: "40px" }}>
                <h2>Try something new (Placeholder)</h2>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {generateCols(5)}
                </Row>
            </Container>
            <Container style={{ paddingTop: "40px" }}>
                <h2 id="all cheeses">All cheeses</h2>
            </Container>
            <Container></Container>
            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {dummyCheeses.map((cheese) => (
                        <Col key={cheese.id}>
                            <CheeseCard
                                cheese={cheese}
                                onClick={handleCardClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Home;
