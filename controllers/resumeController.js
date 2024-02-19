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

exports.editeducation = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const eduIndex = student.resume.education.findIndex(
                        (i) => i.id === req.params.eduid
            );
            student.resume.education[eduIndex] = {
                        ...student.resume.education[eduIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Education Updated!" });
});

exports.deleteeducation = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filterededu = student.resume.education.filter(
                        (i) => i.id === req.params.eduid
            );
           student.resume.education = filterededu;
           await student.save();
           res.json({ message: "Education Deleted!"});
});


exports.addjob = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.jobs.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Job Added!" });
});

exports.editjob = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const jobIndex = student.resume.jobs.findIndex(
                        (i) => i.id === req.params.jobid
            );
            student.resume.jobs[jobIndex] = {
                        ...student.resume.jobs[jobIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Job Updated!" });
});

exports.deletejob = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredjob = student.resume.jobs.filter(
                        (i) => i.id === req.params.jobid
            );
            student.resume.jobs = filteredjob;
            await student.save();
            res.json({ message: "Job Deleted!" });
});

