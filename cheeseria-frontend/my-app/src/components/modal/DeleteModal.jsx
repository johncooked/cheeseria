import React from "react";
import { Modal, Button } from "react-bootstrap";
import { API_BASE_URL } from "../../config/apiConfig";

const DeleteModal = ({ show, handleClose, cheese }) => {
    const handleDeleteCheese = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/cheese/${cheese.id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete cheese");
            }
        } catch (error) {
            console.error("Error deleting cheese:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleDeleteCheese();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="danger" onClick={handleSubmit}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
