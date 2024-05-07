import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import { useAuth } from "../../components/auth/AuthContext";
import HeroSection from "../../components/hero/HeroSection";
import CheeseCard from "../../components/cheesecard/CheeseCard";
import PlaceholderCheeseCard from "../../components/placeholder/PlaceholderCheeseCard";
import PriceCalculator from "../../components/calculator/PriceCalculator";

const Home = () => {
    // Current cheeses fetched from api
    const [cheeses, setCheeses] = useState([]);
    // Keep track of the 5 most recently viewed cheeses
    // Only track the current instance
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    // Track admin auth state
    const { isLoggedIn } = useAuth();
    const [showCalc, setShowCalc] = useState(false);
    const [selectedCheese, setSelectedCheese] = useState(null);

    const handleCardClick = (cheese) => {
        console.log(cheese);

        const updatedRecentlyViewed = [cheese, ...recentlyViewed.slice(0, 4)];

        if (updatedRecentlyViewed.length > 5) {
            updatedRecentlyViewed.pop();
        }

        setRecentlyViewed(updatedRecentlyViewed);
        setSelectedCheese(cheese);
        setShowCalc(true);
        console.log("Recently viewed:", updatedRecentlyViewed);
    };

    const handleCloseCalc = () => {
        setShowCalc(false);
        setSelectedCheese(null);
    };

    // Fetch data from API
    useEffect(() => {
        const fetchCheeses = async () => {
            try {
                const res = await fetch("/api/cheese");
                console.log(res);
                if (!res.ok) {
                    throw new Error("Failed to fetch cheeses");
                }
                const data = await res.json();
                setCheeses(data);
            } catch (err) {
                console.error("Error fetching cheeses:", err);
            }
        };
        fetchCheeses();
    }, []);

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
                <Container className="mb-3">
                    <p>No recently viewed items.</p>
                </Container>
            )}
            <Container className="mb-3" style={{ paddingTop: "40px" }}>
                <h2>Popular cheeses (Placeholder)</h2>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {generateCols(5)}
                </Row>
            </Container>
            <Container className="mb-3" style={{ paddingTop: "40px" }}>
                <h2>Try something new (Placeholder)</h2>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {generateCols(5)}
                </Row>
            </Container>
            <Container className="mb-3" style={{ paddingTop: "40px" }}>
                <h2 className="me-auto p-2" id="all cheeses">
                    All cheeses
                </h2>
            </Container>
            {isLoggedIn && (
                <Container className="mb-3">
                    <Button className="me-2" variant="primary" size="sm">
                        + Add new cheese
                    </Button>
                    <Button className="me-2" variant="success" size="sm">
                        Bulk edit (Placeholder)
                    </Button>
                    <Button className="me-2" variant="danger" size="sm">
                        - Bulk delete (Placeholder)
                    </Button>
                </Container>
            )}

            <Container>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {cheeses.map((cheese) => (
                        <Col key={cheese.id}>
                            <CheeseCard
                                cheese={cheese}
                                onClick={handleCardClick}
                                isAdmin={isLoggedIn}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <PriceCalculator
                show={showCalc}
                onHide={handleCloseCalc}
                cheese={selectedCheese}
            />
        </Container>
    );
};

export default Home;
