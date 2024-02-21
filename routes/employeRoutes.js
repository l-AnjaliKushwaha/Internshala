const express = require("express");
const router = express.Router();
const { 
            homepage,
            currentEmploye,
            employesignup,
            employesignin,
            employesignout,
            employesendmail,
            employeforgetlink,
            employeresetpassword,
            employeupdate,
            employeorganizationlog,
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");

// GET /
router.get("/", homepage);

// POST /employe
router.post("/current", isAuthenticated, currentEmploye);
 
// POST /signup 
router.post("/signup", employesignup);

// POST /signin
router.post("/signin", employesignin);

// GET /signout
router.get("/signout", isAuthenticated, employesignout);

// POST /employe/send-mail
router.post("/employe/send-mail", employesendmail);


// GET /employe/forget-link/:employeid
router.get("/employe/forget-link/:id", employeforgetlink);

// POST /employe/reset-password/:employeid
router.post("/employe/reset-password/:id", isAuthenticated, employeresetpassword);

// POST /employe/update/:employeid
router.post("/employe/update/:id", isAuthenticated, employeupdate);

// POST /employe/employeorganizationlog/:employeid
router.post("/employe/organizationlog/:id", isAuthenticated, employeorganizationlog);


module.exports = router;