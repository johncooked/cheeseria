const express = require("express");
const router = express.Router();
const multer = require("multer");
const cheeseController = require("../controllers/cheeseController");

// Setup multer
const upload = multer({ dest: "uploads/" });

// Test endpoint
router.get("/status", cheeseController.getStatus);

// Add cheese
router.post("/", cheeseController.addCheese);

// Find cheeses
router.get("/", cheeseController.findCheeses);

// Update cheese
router.put("/:id", cheeseController.updateCheese);

// Delete cheese
router.delete("/:id", cheeseController.deleteCheese);

module.exports = router;
