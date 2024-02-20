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
            addinternship,
            editinternship,
            deleteinternship,
            addresponsibilities,
            editresponsibilities,
            deleteresponsibilities,

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

// POST
router.post("/add-internship", isAuthenticated, addinternship);

// POST
router.post("/edit-internship/:internshipid", isAuthenticated, editinternship);

// POST
router.post("/delete-internship/:internshipid", isAuthenticated, deleteinternship);

// POST
router.post("/add-responsibilities", isAuthenticated, addresponsibilities);

// POST
router.post("/edit-responsibilities/:responsibilitiesid", isAuthenticated, editresponsibilities);

// POST
router.post("/delete-responsibilities/:responsibilitiesid", isAuthenticated, deleteresponsibilities);

// POST
router.post("/add-courses", isAuthenticated, addcourses);

// POST
router.post("/edit-courses/:coursesid", isAuthenticated, editcourses);

// POST
router.post("/delete-courses/:coursesid", isAuthenticated, deletecourses);




module.exports = router;