const { catchASyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");

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
            res.json(student);
});  



exports.studentsignout = catchASyncErrors(async(req, res, next) => {});  