import React from "react";
import Card from "react-bootstrap/Card";
import "./CheeseCard.css";

const CheeseCard = ({ cheese, onClick }) => {
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
            </Card.Body>
        </Card>
    );
};

export default CheeseCard;
