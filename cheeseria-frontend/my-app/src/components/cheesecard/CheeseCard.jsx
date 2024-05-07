import React, { useState } from "react";
import "./CheeseCard.css";
import { Card, Button, Form } from "react-bootstrap";
import EditModal from "../modal/EditModal";

const CheeseCard = ({ cheese, onClick, isAdmin, selected, onSelectChange }) => {
    const { name, img, pricePerKilo, colour } = cheese;
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEdit = (e) => {
        e.stopPropagation();
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

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
                <Card.Img
                    variant="top"
                    src={img || "https://via.placeholder.com/150"}
                    alt={name}
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
