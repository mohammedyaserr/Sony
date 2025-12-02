import db from '../config/db.js'

export const loginUser = ((req, res) => {
    const { email, pass } = req.body;

    const values = [email, pass];
    console.log(values, "login values");

    const sql = "SELECT * FROM users WHERE email = ? AND pass = ?";

    db.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json("server error");
        }

        if (result.length > 0) {
            // user found
            return res.status(200).json({
                message: "login success",
                
                user: result[0]
            });
        } else {
            // no user found
            return res.status(404).json("invalid credentials");
        }
    });
});


