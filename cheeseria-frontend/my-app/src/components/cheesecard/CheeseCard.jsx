import React, { useState } from "react";
import "./CheeseCard.css";
import { Card, Button, Form } from "react-bootstrap";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";

/**
 * Renders a card component displaying details of a cheese.
 * Allows editing and deletion of the cheese.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.cheese - The cheese object containing details like name, image, price per kilo, and colour.
 * @param {Function} props.onClick - Callback function to handle click event on the card.
 * @param {boolean} props.isAdmin - Indicates whether the user is an admin.
 * @param {Function} props.setFormSubmitted - Callback function to handle form submission event.
 * @returns {JSX.Element} CheeseCard component.
 */
const CheeseCard = ({ cheese, onClick, isAdmin, setFormSubmitted }) => {
    const { name, image, pricePerKilo, colour } = cheese;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleButtonClick = (e, whichForm) => {
        e.stopPropagation();

        switch (whichForm) {
            case "edit":
                setShowEditModal(true);
                break;
            case "delete":
                setShowDeleteModal(true);
                break;
            default:
                break;
        }
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
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
                                onClick={(e) => handleButtonClick(e, "edit")}
                            >
                                Edit
                            </Button>{" "}
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={(e) => handleButtonClick(e, "delete")}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
            <EditModal
                show={showEditModal}
                handleClose={handleCloseModal}
                cheese={cheese}
            />
            <DeleteModal
                show={showDeleteModal}
                handleClose={handleCloseModal}
                cheese={cheese}
            />
        </>
    );
};

export default CheeseCard;
