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

exports.addresponsibilitie = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.responsibilities.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Responsibilities Added!" });
});

exports.editresponsibilitie = catchAsyncErrors(async (req, res, next) => {
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

exports.deleteresponsibilitie = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredresponsibilities = student.resume.responsibilities.filter(
                        (i) => i.id === req.params.responsibilitiesid
            );
            student.resume.responsibilities = filteredresponsibilities;
            await student.save();
            res.json({ message: "Responsibilities Deleted!" });
});

exports.addcourse = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.courses.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Courses Added!" });
});

exports.editcourse = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const coursesIndex = student.resume.courses.findIndex(
                        (i) => i.id === req.params.coursesid
            );
            student.resume.courses[coursesIndex] = {
                        ...student.resume.courses[coursesIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Courses Updated!" });
});

exports.deletecourse = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredcourses = student.resume.courses.filter(
                        (i) => i.id === req.params.coursesid
            );
            student.resume.courses = filteredcourses;
            await student.save();
            res.json({ message: "Courses Deleted!" });
});

exports.addproject = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.projects.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Projects Added!" });
});

exports.editproject = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const projectsIndex = student.resume.projects.findIndex(
                        (i) => i.id === req.params.projectsid
            );
            student.resume.projects[projectsIndex] = {
                        ...student.resume.projects[projectsIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Projects Updated!" });
});

exports.deleteproject = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredprojects = student.resume.projects.filter(
                        (i) => i.id === req.params.projectsid
            );
            student.resume.projects = filteredprojects;
            await student.save();
            res.json({ message: "Projects Deleted!" });
});

exports.addskill = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.skills.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Skills Added!" });
});

exports.editskill = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const skillsIndex = student.resume.skills.findIndex(
                        (i) => i.id === req.params.skillsid
            );
            student.resume.skills[skillsIndex] = {
                        ...student.resume.skills[skillsIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Skills Updated!" });
});

exports.deleteskill = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredskills = student.resume.skills.filter(
                        (i) => i.id === req.params.skillsid
            );
            student.resume.skills = filteredskills;
            await student.save();
            res.json({ message: "Skills Deleted!" });
});

exports.addaccomplishment = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            student.resume.accomplishments.push({ ...req.body, id: uuidv4() });
            await student.save();
            res.json({ message: "Accomplishments Added!" });
});

exports.editaccomplishment = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const accomplishmentsIndex = student.resume.accomplishments.findIndex(
                        (i) => i.id === req.params.accomplishmentsid
            );
            student.resume.accomplishments[accomplishmentsIndex] = {
                        ...student.resume.accomplishments[accomplishmentsIndex],
                        ...req.body,
            };
            await student.save();
            res.json({ message: "Accomplishments Updated!" });
});

exports.deleteaccomplishment = catchAsyncErrors(async (req, res, next) => {
            const student = await Student.findById(req.id).exec();
            const filteredaccomplishments = student.resume.accomplishments.filter(
                        (i) => i.id === req.params.accomplishmentsid
            );
            student.resume.accomplishments = filteredaccomplishments;
            await student.save();
            res.json({ message: "Accomplishments Deleted!" });
});