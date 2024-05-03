const express = require("express");
const cheeseRoutes = require("./routes/cheeseRoutes");
const sequelize = require("./config/database");
const seedCheeses = require("./config/seed");

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route setup
app.use("/api/cheeses", cheeseRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Database synchronization and seeding
sequelize
    .sync()
    .then(async () => {
        await seedCheeses(); // Execute seeding function after database synchronization
        // Start the Express server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database synchronization error:", err);
    });

module.exports = app;
