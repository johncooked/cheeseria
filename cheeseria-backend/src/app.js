const express = require("express");
const path = require("path");
const cors = require("cors");
const cheeseRoutes = require("./routes/cheeseRoutes");
const sequelize = require("./config/database");
const seedCheeses = require("./config/seed");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const { log } = require("console");

const app = express();

const swaggerDocument = YAML.load("./config/swagger.yaml");

console.log(__dirname);

// Serve the static files from the frontend build directory
app.use(express.static(path.join(__dirname, "cheeseria-frontend", "build")));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Serve SwaggerUi
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route setup
app.use("/cheese", cheeseRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Define a catch-all route to serve the index.html file for any other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cheeseria-frontend", "build"));
});

// Database synchronization and seeding
sequelize
    .sync()
    .then(async () => {
        await seedCheeses(); // Execute seeding function after database synchronization
        // Start the Express server
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database synchronization error:", err);
    });

module.exports = app;
