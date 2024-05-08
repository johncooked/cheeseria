import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const AddModal = ({ show, handleClose, setFormSubmitted }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        pricePerKilo: "",
        colour: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: files[0],
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const headers = new Headers();
            headers.append("Content-Type", "multipart/form-data");

            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("pricePerKilo", formData.pricePerKilo);
            formDataToSend.append("colour", formData.colour);
            formDataToSend.append("image", formData.image);

            const response = await fetch("/api/cheese", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                handleClose();
                setFormSubmitted(true);
                setErrorMessage("");
            } else {
                const resErr = await response.json();
                setErrorMessage(resErr.error || "Failed to add cheese");

                console.error("Failed to add cheese");
            }
        } catch (error) {
            console.error("Error adding cheese:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Cheese</Modal.Title>
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
                    {errorMessage && (
                        <Alert variant="danger">{errorMessage}</Alert>
                    )}
                    <Button variant="primary" type="submit">
                        Add Cheese
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddModal;
