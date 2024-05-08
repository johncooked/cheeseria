import React, { useState } from "react";
import "./CheeseCard.css";
import { Card, Button, Form } from "react-bootstrap";
import EditModal from "../modal/EditModal";

const CheeseCard = ({ cheese, onClick, isAdmin, setFormSubmitted }) => {
    const { name, image, pricePerKilo, colour } = cheese;
    const [showEditModal, setShowEditModal] = useState(false);

    console.log("name: ", name);
    console.log("imgUrl: ", image);
    console.log("pricePerKilo: ", pricePerKilo);
    console.log("colour: ", colour);

    const handleEdit = (e) => {
        e.stopPropagation();
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setFormSubmitted(true);
    };

    return (
        <>
            <Card onClick={() => onClick(cheese)}>
                {" "}
                {isAdmin && (
                    <Form.Check
                        type="checkbox"
                        className="d-flex m-1"
                        style={{ justifyContent: "end" }}
                    />
                )}
                <Card.Img
                    variant="top"
                    src={image || "https://via.placeholder.com/150"}
                    alt={name}
                    style={{
                        height: "200px",
                        objectFit: "cover",
                        overflow: "hidden",
                    }}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>Price per Kilo:</strong> $
                        {pricePerKilo.toFixed(2)}
                        <br />
                        <strong>Colour:</strong> {colour}
                    </Card.Text>
                    {isAdmin && (
                        <div>
                            <Button
                                variant="success"
                                size="sm"
                                onClick={handleEdit}
                            >
                                Edit
                            </Button>{" "}
                            <Button variant="danger" size="sm">
                                Delete
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
            <EditModal
                show={showEditModal}
                handleClose={handleCloseEditModal}
                cheese={cheese}
            />
        </>
    );
};

export default CheeseCard;
