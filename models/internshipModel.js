const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema(
            {
                        profile: String,
                        internshiptype: { type: String, enum: ["In office", "Remote"]},
            },
            { timestamps: true }
);

internshipModel.pre("save", function () {
            if (!this.isModified("password")) {
                        return;
            }
            let salt = bcrypt.genSaltSync(10);
            this.password = bcrypt.hashSync(this.password, salt);
});




const Internship = mongoose.model("Internship", internshipModel);

module.exports = Internship;
