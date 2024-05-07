import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, cheese }) => {
    const [formData, setFormData] = useState({
        name: cheese.name,
        pricePerKilo: cheese.pricePerKilo,
        colour: cheese.colour,
        image: null, // For storing the selected image file
        // Add other cheese details here
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === "image" ? files[0] : value,
        });
    };

    const data = {
        name: "Cheddar",
        image: "https://example.com/cheddar.jpg",
        pricePerKilo: 10.99,
        colour: "Yellow",
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("pricePerKilo", formData.pricePerKilo);
            formDataToSend.append("colour", formData.colour);
            if (formData.image) {
                formDataToSend.append("image", formData.image);
            }

            const response = await fetch(`/api/cheese/${cheese.id}`, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle success, maybe close the modal
                handleClose();
            } else {
                // Handle error
                console.error("Failed to update cheese");
            }
        } catch (error) {
            console.error("Error updating cheese:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Cheese</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formCheeseImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {/* Display a preview of the selected image */}
                    {formData.image && (
                        <img
                            src={URL.createObjectURL(formData.image)}
                            alt="Preview"
                            style={{ width: "100%", marginBottom: "10px" }}
                        />
                    )}
                    <Form.Group className="mb-3" controlId="formCheeseName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter cheese name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheesePrice">
                        <Form.Label>Price Per Kilo</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price per kilo"
                            name="pricePerKilo"
                            value={formData.pricePerKilo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheeseColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter colour"
                            name="colour"
                            value={formData.colour}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditModal;
