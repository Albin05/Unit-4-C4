require('dotenv').config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, proces.env.SECRET_KEY, (err,decoded) => {
            if(err) return reject(err)

            return resolve(decoded)
        });
    })
}


const authenticate = async (req, res)