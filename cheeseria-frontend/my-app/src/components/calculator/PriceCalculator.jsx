import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

/**
 * Price Calculator component for calculating cheese price.
 * If more time were spent on it, it could be enhanced to use an off-canvas component triggered by a floating side button.
 * This enhancement could allow users to add multiple types of cheese and calculate the total price if they were to buy them.
 * @param {Object} props - Component props.
 * @param {boolean} props.show - Indicates whether the modal should be displayed.
 * @param {function} props.onHide - Function to handle modal close event.
 * @param {Object} props.cheese - Cheese object with pricePerKilo property.
 * @returns {JSX.Element} PriceCalculator component.
 */
const PriceCalculator = ({ show, onHide, cheese }) => {
    const [weight, setWeight] = useState(0);
    const [cost, setCost] = useState(0);

    // Reset weight and cost when modal is hidden
    useEffect(() => {
        if (!show) {
            setWeight(0);
            setCost(0);
        }
    }, [show]);

    /**
     * Handles the calculation of cheese cost based on weight.
     */
    const handleCalculate = () => {
        if (cheese) {
            const calculatedCost = cheese.pricePerKilo * weight;
            setCost(calculatedCost);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Price Calculator {cheese ? `for ${cheese.name}` : ""}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cheese ? (
                    <Container>
                        <p>Price per Kilo: ${cheese.pricePerKilo.toFixed(2)}</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formWeight">
                                <Form.Label>Weight (kg)</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter weight in kg"
                                    value={weight}
                                    onChange={(e) =>
                                        setWeight(parseFloat(e.target.value))
                                    }
                                />
                            </Form.Group>
                        </Form>
                        <Button
                            className="mb-3"
                            variant="primary"
                            onClick={handleCalculate}
                        >
                            Calculate
                        </Button>
                        <p>Cost: ${cost.toFixed(2)}</p>
                    </Container>
                ) : (
                    <p>No cheese selected.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PriceCalculator;
