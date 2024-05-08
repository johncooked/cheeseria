const express = require("express");
const path = require("path");
const cors = require("cors");
const cheeseRoutes = require("./routes/cheeseRoutes");
const sequelize = require("./config/database");
const seedCheeses = require("./config/seed");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

const swaggerDocument = YAML.load("../src/config/swagger.yaml");

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

// Database synchronization and seeding
sequelize
    .sync()
    .then(async () => {
        await seedCheeses(); // Execute seeding function after database synchronization
        // Start the Express server
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database synchronization error:", err);
    });

module.exports = app;
