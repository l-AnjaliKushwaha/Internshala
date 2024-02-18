const express = require("express");
const router = express.Router();
const { resume, addeducation } = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

// GET /
router.get("/", isAuthenticated, resume);

// POST
router.post("/add-edu", isAuthenticated, addeducation);



module.exports = router;