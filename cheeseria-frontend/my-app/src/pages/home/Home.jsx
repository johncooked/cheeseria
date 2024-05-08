import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import { useAuth } from "../../components/auth/AuthContext";
import HeroSection from "../../components/hero/HeroSection";
import CheeseCard from "../../components/cheesecard/CheeseCard";
import PlaceholderCheeseCard from "../../components/placeholder/PlaceholderCheeseCard";
import PriceCalculator from "../../components/calculator/PriceCalculator";
import AddModal from "../../components/modal/AddModal";

/**
 * Home component renders the home page with cheese cards, recently viewed section,
 * placeholder cards, and price calculator modal.
 *
 * @component
 * @returns {JSX.Element} Home component.
 */
const Home = () => {
    const [cheeses, setCheeses] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const { isLoggedIn } = useAuth();
    const [selectedCheese, setSelectedCheese] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showCalc, setShowCalc] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCardClick = (cheese) => {
        console.log(cheese);

        // Check if the clicked cheese is already in recentlyViewed
        const index = recentlyViewed.findIndex((item) => item.id === cheese.id);

        // If the cheese is already in recentlyViewed, remove it from its current position
        if (index !== -1) {
            recentlyViewed.splice(index, 1);
        }

        // Add the clicked cheese to the beginning of recentlyViewed
        const updatedRecentlyViewed = [cheese, ...recentlyViewed.slice(0, 4)];

        // Limit the recentlyViewed list to 5 items
        if (updatedRecentlyViewed.length > 5) {
            updatedRecentlyViewed.pop();
        }

        setRecentlyViewed(updatedRecentlyViewed);
        setSelectedCheese(cheese);
        setShowCalc(true);
        console.log("Recently viewed:", updatedRecentlyViewed);
    };

    const handleShowAddModal = () => {
        setShowAddModal(true);
    };

    const handleCloseModal = () => {
        setShowCalc(false);
        setShowAddModal(false);
        setSelectedCheese(null);
    };

    // Fetch data from API
    useEffect(() => {
        const fetchCheeses = async () => {
            try {
                const res = await fetch("/api/cheese");
                if (!res.ok) {
                    throw new Error("Failed to fetch cheeses");
                }
                const data = await res.json();
                setCheeses(data);
            } catch (err) {
                console.error("Error fetching cheeses:", err);
            } finally {
                setFormSubmitted(false);
            }
        };

        fetchCheeses();
    }, [formSubmitted]);

    // Function to generate placeholder cards
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
                    All cheeses ({cheeses.length})
                </h2>
            </Container>
            {isLoggedIn && (
                <Container className="mb-3">
                    <Button
                        className="me-2"
                        variant="primary"
                        size="sm"
                        onClick={handleShowAddModal}
                    >
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
                        <Col>
                            <CheeseCard
                                key={cheese.id}
                                cheese={cheese}
                                onClick={handleCardClick}
                                isAdmin={isLoggedIn}
                                setFormSubmitted={setFormSubmitted}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <PriceCalculator
                show={showCalc}
                onHide={handleCloseModal}
                cheese={selectedCheese}
            />
            <AddModal
                show={showAddModal}
                handleClose={handleCloseModal}
                setFormSubmitted={setFormSubmitted}
            />
        </Container>
    );
};

export default Home;
