import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheeseCard from "../CheeseCard";

describe("CheeseCard component", () => {
    const cheese = {
        id: 1,
        name: "Cheddar",
        image: "cheddar.jpg",
        pricePerKilo: 10.99,
        colour: "Yellow",
    };

    it("renders with cheese card with correct name", () => {
        render(<CheeseCard cheese={cheese} />);

        // Assert that the cheese details are rendered
        expect(screen.getByText("Cheddar")).toBeInTheDocument();
    });

    it("calls onClick function when clicked", () => {
        const onClick = jest.fn();
        render(<CheeseCard cheese={cheese} onClick={onClick} />);

        // Simulate a click on the card
        fireEvent.click(screen.getByRole("img", { name: /cheddar/i }));

        // Assert that onClick function is called
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledWith(cheese);
    });

    it("renders edit button when isAdmin is true", () => {
        render(<CheeseCard cheese={cheese} isAdmin={true} />);

        // Assert that the edit button is rendered
        expect(
            screen.getByRole("button", { name: /edit/i })
        ).toBeInTheDocument();
    });

    it("opens edit modal when edit button is clicked", () => {
        render(<CheeseCard cheese={cheese} isAdmin={true} />);

        // Simulate a click on the edit button
        fireEvent.click(screen.getByRole("button", { name: /edit/i }));

        // Assert that the edit modal is opened
        expect(screen.getByText(/edit cheese/i)).toBeInTheDocument();
    });
});
