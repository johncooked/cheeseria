const Cheese = require("../models/cheese");

const seedCheeses = async () => {
    try {
        // Check if there are any cheeses in the database
        const existingCheeses = await Cheese.findAll();
        if (existingCheeses.length === 0) {
            // If no cheeses are found, populate the database with sample data
            await Cheese.bulkCreate([
                {
                    name: "Cheddar",
                    image: null,
                    pricePerKilo: 10.99,
                    colour: "Yellow",
                },
                {
                    name: "Brie",
                    image: null,
                    pricePerKilo: 15.99,
                    colour: "White",
                },
                {
                    name: "Gouda",
                    image: null,
                    pricePerKilo: 12.99,
                    colour: "Yellow",
                },
                {
                    name: "Blue Cheese",
                    image: null,
                    pricePerKilo: 20.99,
                    colour: "Blue",
                },
                {
                    name: "Parmesan",
                    image: null,
                    pricePerKilo: 18.99,
                    colour: "Yellow",
                },
            ]);
            console.log("Sample cheese data seeded successfully");
        } else {
            console.log("Cheeses already exist in the database");
        }
    } catch (error) {
        console.error("Error seeding cheese data:", error);
    }
};

module.exports = seedCheeses;
