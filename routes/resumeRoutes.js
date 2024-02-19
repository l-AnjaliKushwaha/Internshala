const express = require("express");
const router = express.Router();
const {     
            resume,
            addeducation,
            editeducation,
            deleteeducation,
            addjob,
            editjob,
            deletejob,

 } = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

// GET /
router.get("/", isAuthenticated, resume);

// POST
router.post("/add-edu", isAuthenticated, addeducation);
 
// POST
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

// POST
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

// POST
router.post("/add-job", isAuthenticated, addjob);

// POST
router.post("/edit-job/:jobid", isAuthenticated, editjob);

// POST
router.post("/delete-job/:jobid", isAuthenticated, deletejob);




module.exports = router;