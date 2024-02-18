// exports.genetatedErrors = (err, req, res, next) => {
//             const statusCode = err.statusCode || 500;

//             if(err.name === "MongoServerError" && err.message.includes("E11000 duplicate key"))
//             {
//                          err.message = "User with this email adress already exists";
//             }

//             res.status(statusCode).json({
//                         message: err.message,
//                         errName: err.name,
//                         // stack: err.stack
//             });
// };

exports.genetatedErrors = (err, req, res, next) => {
            const statusCode = err.statusCode || 500;

            if (err.name === "TokenExpiredError") {
                        // Token has expired
                        return res.status(401).json({ message: "Token expired. Please log in again." });
            }

            if (err.name === "MongoServerError" && err.message.includes("E11000 duplicate key")) {
                        err.message = "User with this email address already exists";
            }

            // Other error handling logic
            res.status(statusCode).json({
                        message: err.message,
                        errName: err.name,
            });
};


 