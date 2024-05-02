const express = require("express");
const router = express.Router();
const cheeseController = require("../controllers/cheeseController");

// Test endpoint
router.get("/status", cheeseController.getStatus);

// Add cheese
router.post("/add", cheeseController.addCheese);

// Find cheeses
router.get("/", cheeseController.findCheeses);

module.exports = router;
