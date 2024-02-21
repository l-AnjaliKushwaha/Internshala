const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Employe = require("../models/employeModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();

exports.homepage = catchAsyncErrors(async (req, res, next) => {
            res.json({ message: "Secure Employe Homepage!" });
});

exports.currentEmploye = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findById(req.id).exec();
            res.json({ employe });
});


exports.employesignup = catchAsyncErrors(async (req, res, next) => {
            const employe = await new Employe(req.body).save();
            sendtoken(employe, 201, res);
});

exports.employesignin = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findOne({ email: req.body.email })
                        .select("+password")
                        .exec();

            if (!employe) return next(new ErrorHandler("User not found with this email address", 404));

            // compare the password of the user who is trying to login and hashed password in
            // database using bcrypt then check if they match or not

            const isMatch = employe.comparepassword(req.body.password);
            if (!isMatch) return next(new ErrorHandler("Wrong Password", 500));

            sendtoken(employe, 200, res);
});


exports.employesignout = catchAsyncErrors(async (req, res, next) => {
            res.clearCookie("token");
            res.json({ message: 'Successfully Signout!' });
});

exports.employesendmail = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findOne({ email: req.body.email }).exec();
            if (!employe)
                        return next
                                    (new ErrorHandler("User not found with this email address", 404));

            const url = `${req.protocol}://${req.get("host")}/employe/forget-link/${employe._id}`;

            sendmail(req, res, next, url);
            employe.resetPasswordToken = "1";
            await employe.save();
            res.json({ employe, url });


});


exports.employeforgetlink = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findById(req.params.id).exec();
            if (!employe)
                        return next
                                    (new ErrorHandler("User not found with this email address", 404));

            if (employe.resetPasswordToken == "1") {
                        employe.resetPasswordToken = "0";
                        employe.password = req.body.password;
                        await employe.save();
            } else {
                        return next(
                                    new ErrorHandler("Invalid Reset Password Link! Please try again", 500)
                        );
            }
            res.status(200).json({
                        message: "Password has been successfully changed",
            })

});


exports.employeresetpassword = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findById(req.id).exec();
            employe.password = req.body.password;
            await employe.save();
            sendtoken(employe, 200, res);
});

exports.employeupdate = catchAsyncErrors(async (req, res, next) => {
            await Employe.findByIdAndUpdate(
                        req.params.id,
                        req.body
            ).exec();
            res.status(200).json({
                        success: true,
                        message: "Employet Update Successfully!",
            });
});

exports.employeorganizationlog = catchAsyncErrors(async (req, res, next) => {
            const employe = await Employe.findById(req.params.id).exec();
            const file = req.files.organizationlog;
            const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(file.name)}`;

            if (employe.organizationlog.fileId !== "") {
                        await imagekit.deleteFile(employe.organizationlog.fileId);
            }

            const { fileId, url } = await imagekit.upload({
                        file: file.data,
                        fileName: modifiedFileName,
            });
            employe.organizationlog = { fileId, url };
            await employe.save();
            res.employe(200).json({
                        success: true,
                        message: "Profile Updated!",
            });
            // res.json({ file: req.files.avatar});
            // res.json({ image});
});
