import React from "react";
import "./CheeseCard.css";
import { Card, Button, Form } from "react-bootstrap";

const CheeseCard = ({ cheese, onClick, isAdmin, selected, onSelectChange }) => {
    const { name, img, pricePerKilo, color } = cheese;

    return (
        <>
            {isAdmin && (
                <Form.Check
                    type="checkbox"
                    className="d-flex m-1"
                    style={{ justifyContent: "end" }}
                />
            )}
            <Card onClick={() => onClick(cheese)}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>Price per Kilo:</strong> $
                        {pricePerKilo.toFixed(2)}
                        <br />
                        <strong>Color:</strong> {color}
                    </Card.Text>
                    {isAdmin && (
                        <div>
                            <Button variant="success" size="sm">
                                Edit
                            </Button>{" "}
                            <Button variant="danger" size="sm">
                                Delete
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default CheeseCard;
