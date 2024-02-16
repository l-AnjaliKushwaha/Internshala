const mongoose = require("mongoose");
const bcrypt =  require("bcryptjs"); 

const studentModel = new mongoose.Schema(
            {
                        email: {
                                    type: String,
                                    unique: true, 
                                    required: [true, "Please provide your email."],
                                    match: [
                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                                        "Please fill a valid email address",
                                    ],
                                },
                        password: {
                                    type: String,
                                    select: false,
                                    maxLength: [
                                                15,
                                                 "Password should not exceed more than 15 characters",
                                                ],
                                    minLength: [
                                                6,
                                                "Password should have atleast 6 characters",
                                    ], 
                                    // match: []
                        },
            },
            { timestamps: true}
);

studentModel.pre("save", function () {
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

const Student = mongoose.model("student", studentModel) ;

module.exports = Student;