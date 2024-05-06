import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, handleLogin, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="admin"
                            required
                        />
                        <Form.Text className="text-muted">
                            Use "admin" and "password" to test admin features.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
