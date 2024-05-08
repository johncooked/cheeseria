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

// Add cheese
exports.addCheese = async (req, res) => {
    try {
        const { name, pricePerKilo, colour } = req.body;

        if (!name || !pricePerKilo || !colour) {
            return res
                .status(400)
                .json({ error: "Missing required parameters" });
        }

        let image = null;

        if (req.file) {
            const uniqueFileName = req.file.filename;
            const baseURL = req.protocol + "://" + req.get("host");
            image = `${baseURL}/uploads/${uniqueFileName}`;
        }

        const newCheese = await Cheese.create({
            name,
            image,
            pricePerKilo,
            colour,
        });

        res.status(201).json(newCheese);
    } catch (error) {
        console.error("Error adding cheese:", error);
        res.status(500).json({ error: "Failed to add cheese" });
    }
};

// Find cheeses
exports.getCheeses = async (req, res) => {
    try {
        const { offset = 0, limit = 10 } = req.query;

        const cheeses = await Cheese.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit),
        });

        res.status(200).json(cheeses);
    } catch (error) {
        console.error("Error finding cheeses:", error);
        res.status(400).json({ error: "Failed to find cheeses" });
    }
};

// Update cheese
exports.updateCheese = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, pricePerKilo, colour } = req.body;
        let image = null;

        if (req.file) {
            const uniqueFileName = req.file.filename;
            const baseURL = req.protocol + "://" + req.get("host");
            image = `${baseURL}/uploads/${uniqueFileName}`;
        }

        const cheese = await Cheese.findByPk(id);
        if (!cheese) {
            return res.status(404).json({ error: "Cheese not found" });
        }

        cheese.name = name;
        cheese.image = image; // update image path
        cheese.pricePerKilo = pricePerKilo;
        cheese.colour = colour;

        await cheese.save();

        res.status(200).json(cheese);
    } catch (error) {
        console.error("Error updating cheese:", error);
        res.status(500).json({ error: "Failed to update cheese" });
    }
};

// Delete Cheese
exports.deleteCheese = async (req, res) => {
    try {
        const { id } = req.params;

        const cheese = await Cheese.findByPk(id);
        if (!cheese) {
            return res.status(404).json({ error: "Cheese not found" });
        }

        await cheese.destroy();

        res.status(204).end();
    } catch (error) {
        console.error("Error deleting cheese:", error);
        res.status(500).json({ error: "Failed to delete cheese" });
    }
};
