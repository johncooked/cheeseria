import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

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
