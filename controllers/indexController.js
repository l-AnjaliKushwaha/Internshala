const { catchASyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.homepage = catchASyncErrors(async(req, res, next) => {
            res.json({message: "homepage"});           
}); 

exports.studentsignup = catchASyncErrors(async(req, res, next) => {
            const student = await new Student(req.body).save();
            res.status(201).json(student);
});  

exports.studentsignin = catchASyncErrors(async(req, res, next) => {
            const student = await Student.findOne({ email: req.body.email })
            .select("+password")
            .exec();

            if(!student) return next(new ErrorHandler("User not found with this email address", 404));

             // compare the password of the user who is trying to login and hashed password in
             // database using bcrypt then check if they match or not

             const isMatch = student.comparepassword(req.body.password);
             if(!isMatch) return next(new ErrorHandler("Wrong Password", 500));

            

            res.json(student);
});  



exports.studentsignout = catchASyncErrors(async(req, res, next) => {});    