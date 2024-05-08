import { render, fireEvent, screen } from "@testing-library/react";
import PriceCalculator from "../PriceCalculator";

describe("PriceCalculator component", () => {
    test("renders with cheese details", () => {
        const mockCheese = {
            name: "Cheddar",
            pricePerKilo: 10.99,
        };
        render(
            <PriceCalculator
                show={true}
                onHide={() => {}}
                cheese={mockCheese}
            />
        );

        // Check if the modal title contains the cheese name
        expect(
            screen.getByText("Price Calculator for Cheddar")
        ).toBeInTheDocument();

        // Check if the price per kilo is displayed
        expect(screen.getByText("Price per Kilo: $10.99")).toBeInTheDocument();

        // Check if the weight input exists
        expect(screen.getByLabelText("Weight (kg)")).toBeInTheDocument();

        // Check if the calculate button exists
        expect(screen.getByText("Calculate")).toBeInTheDocument();
    });

    test("calculates cost correctly", () => {
        const mockCheese = {
            name: "Cheddar",
            pricePerKilo: 10.99,
        };
        render(
            <PriceCalculator
                show={true}
                onHide={() => {}}
                cheese={mockCheese}
            />
        );

        // Enter weight value
        const weightInput = screen.getByLabelText("Weight (kg)");
        fireEvent.change(weightInput, { target: { value: "2" } });

        // Click calculate button
        fireEvent.click(screen.getByText("Calculate"));

        // Check if the cost is calculated correctly
        expect(screen.getByText("Cost: $21.98")).toBeInTheDocument();
    });

    test("renders 'No cheese selected' when cheese is null", () => {
        render(<PriceCalculator show={true} onHide={() => {}} cheese={null} />);

        // Check if 'No cheese selected' message is displayed
        expect(screen.getByText("No cheese selected.")).toBeInTheDocument();
    });

    test("resets cost when modal is hidden", () => {
        const mockCheese = {
            name: "Cheddar",
            pricePerKilo: 10.99,
        };
        render(
            <PriceCalculator
                show={true}
                onHide={() => {}}
                cheese={mockCheese}
            />
        );

        // Enter weight value
        const weightInput = screen.getByLabelText("Weight (kg)");
        fireEvent.change(weightInput, { target: { value: "2" } });

        // Click calculate button
        fireEvent.click(screen.getByText("Calculate"));

        // Check if the cost is calculated correctly
        expect(screen.getByText("Cost: $21.98")).toBeInTheDocument();

        // Hide the modal
        render(
            <PriceCalculator
                show={false}
                onHide={() => {}}
                cheese={mockCheese}
            />
        );

        // Check if cost reset
        expect(
            screen.queryByText("<p>Cost: $21.98</p>")
        ).not.toBeInTheDocument();
    });
});
