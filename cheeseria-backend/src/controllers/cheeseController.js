const Cheese = require("../models/cheese");

// Get api status
exports.getStatus = async (req, res) => {
    try {
        const status = {
            Status: "Running ok",
        };

        res.status(200).json(status);
    } catch (error) {}
};

// Add Cheese
exports.addCheese = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const { name, image, pricePerKilo, color } = req.body;

        if (!name || !image || !pricePerKilo || !color) {
            return res
                .status(400)
                .json({ error: "Missing required parameters" });
        }

        const newCheese = await Cheese.create({
            name,
            image,
            pricePerKilo,
            color,
        });

        res.status(201).json(newCheese);
    } catch (error) {
        console.error("Error adding cheese:", error);
        res.status(500).json({ error: "Failed to add cheese" });
    }
};

// Find Cheeses with Infinite Scrolling
exports.findCheeses = async (req, res) => {
    try {
        const { offset = 0, limit = 10 } = req.query;

        const cheeses = await Cheese.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit),
        });

        res.status(200).json(cheeses);
    } catch (error) {
        console.error("Error finding cheeses:", error);
        res.status(500).json({ error: "Failed to find cheeses" });
    }
};
