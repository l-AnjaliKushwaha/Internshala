const Student = require("../models/studentModel");
const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async (req, res, next) => {
            const { resume } = await Student.findById(req.id).exec();
            res.json({ message: "Secure Resume Page!", resume });
});

exports.addeducation = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.education.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Education Added!"});
});