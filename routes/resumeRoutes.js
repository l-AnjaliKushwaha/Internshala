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
            addresponsibilitie,
            editresponsibilitie,
            deleteresponsibilitie,
            addcourse,
            editcourse,
            deletecourse, 
            addproject,
            editproject,
            deleteproject,
            addskill,
            editskill,
            deleteskill,
            addaccomplishment,
            editaccomplishment,
            deleteaccomplishment,

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
router.post("/add-responsibilitie", isAuthenticated, addresponsibilitie);

// POST
router.post("/edit-responsibilitie/:responsibilitieid", isAuthenticated, editresponsibilitie);

// POST
router.post("/delete-responsibilitie/:responsibilitieid", isAuthenticated, deleteresponsibilitie);

// POST
router.post("/add-course", isAuthenticated, addcourse);

// POST
router.post("/edit-course/:courseid", isAuthenticated, editcourse);

// POST
router.post("/delete-course/:courseid", isAuthenticated, deletecourse);

// POST
router.post("/add-project", isAuthenticated, addproject);

// POST
router.post("/edit-project/:projectid", isAuthenticated, editproject);

// POST
router.post("/delete-project/:projectid", isAuthenticated, deleteproject);

// POST
router.post("/add-skill", isAuthenticated, addskill);

// POST
router.post("/edit-skill/:skillid", isAuthenticated, editskill);

// POST
router.post("/delete-skill/:skillid", isAuthenticated, deleteskill);

// POST
router.post("/add-accomplishment", isAuthenticated, addaccomplishment);

// POST
router.post("/edit-accomplishment/:accomplishmentid", isAuthenticated, editaccomplishment);

// POST
router.post("/delete-accomplishment/:accomplishmentid", isAuthenticated, deleteaccomplishment);



module.exports = router;