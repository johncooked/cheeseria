import React from "react";
import "./CheeseCard.css";
import { Card, Button } from "react-bootstrap";

const CheeseCard = ({ cheese, onClick, isAdmin }) => {
    const { name, img, pricePerKilo, color } = cheese;

    return (
        <Card onClick={() => onClick(cheese)}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Price per Kilo:</strong> ${pricePerKilo.toFixed(2)}
                    <br />
                    <strong>Color:</strong> {color}
                </Card.Text>
                {isAdmin && (
                    <div>
                        <Button variant="success">Edit</Button>{" "}
                        <Button variant="danger">Delete</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default CheeseCard;
