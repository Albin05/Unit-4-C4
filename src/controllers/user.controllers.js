const express = require("express");

const router = express.Router();

const User = require("../models/user.models");

router.post("/register", async (req, res) => {
    try{
        const register = await User.create(req.body);

        return res.status(201).send(register);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});

router.post("/login", async (req, res) => {
    try{
        const login = await User.create(req.body);

        return res.status(201).send(login);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});