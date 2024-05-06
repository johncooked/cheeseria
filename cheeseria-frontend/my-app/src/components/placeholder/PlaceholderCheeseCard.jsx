import React from "react";

import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const PlaceholderCheeseCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                </Placeholder>
            </Card.Body>
        </Card>
    );
};

export default PlaceholderCheeseCard;
