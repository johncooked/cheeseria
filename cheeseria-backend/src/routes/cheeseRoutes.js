const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const cheeseController = require("../controllers/cheeseController");

// Setup multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using uuidv4
        const uniqueFileName = uuidv4();
        const fileExtension = file.originalname.split(".").pop(); // Get the file extension
        cb(null, `${uniqueFileName}.${fileExtension}`); // specify the file name with extension
    },
});

const upload = multer({ storage: storage });

// Test endpoint
router.get("/status", cheeseController.getStatus);

// Add cheese
router.post("/", cheeseController.addCheese);

// Find cheeses
router.get("/", cheeseController.getCheeses);

// Update cheese
router.put("/:id", upload.single("image"), cheeseController.updateCheese);

// Delete cheese
router.delete("/:id", cheeseController.deleteCheese);

module.exports = router;
