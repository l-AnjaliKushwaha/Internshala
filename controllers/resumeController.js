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

exports.addinternship = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.internships.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Internship Added!" });
});

exports.editinternship = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const internshipIndex = student.resume.internships.findIndex(
                        (i) => i.id === req.params.internshipid
            );
            student.resume.internships[internshipIndex] = {
                        ...student.resume.internships[internshipIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Internship Updated!" });
});

exports.deleteinternship = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredinternship = student.resume.internships.filter(
                        (i) => i.id === req.params.internshipid
            );
            student.resume.internships = filteredinternship;
            await student.save();
            res.json({ message: "Internship Deleted!" });
});

exports.addresponsibilities = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.responsibilities.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Responsibilities Added!" });
});

exports.editresponsibilities = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const responsibilitiesIndex = student.resume.responsibilities.findIndex(
                        (i) => i.id === req.params.responsibilitiesid
            );
            student.resume.responsibilities[responsibilitiesIndex] = {
                        ...student.resume.responsibilities[responsibilitiesIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Responsibilities Updated!" });
});

exports.deleteresponsibilities = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredresponsibilities = student.resume.responsibilities.filter(
                        (i) => i.id === req.params.responsibilitiesid
            );
            student.resume.responsibilities = filteredresponsibilities;
            await student.save();
            res.json({ message: "Responsibilities Deleted!" });
});