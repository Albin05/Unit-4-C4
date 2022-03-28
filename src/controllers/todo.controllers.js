const express = require("express");

const router = express.Router();

const Todo = require("../models/todo.models");

router.get("/todos", async (req, res) => {
    try{
        const alltodos = await Todo.find().lean().exec();

        return res.status(200).send({todos: alltodos});
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.post("/todos", async (req, res) => {
    try{
        const todos = await Todo.create(req.body);

        return res.status(201).send(todos);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});

router.get("/todos/:id", async (req, res) => {
    try{
        const findtodo = await Todo.findById(req.params.id).lean().exec();

        return res.status(200).send(findtodo);
    }
    catch(err){
        return res.status(401).send({message: err.message});
    }
});

router.patch("/todos/:id", async (req, res) => {
    try{
        const updatetodo = await Todo.findByIdAndUpdate(req.params.id).lean().exec();
        
        return res.status(200).send(updatetodo);
    }
    catch(err){
        return res.status(401).send({message: err.message});
    }
});

router.delete("/todos/:id", async (req, res) => {
    try{
        const deletetodo = await Todo.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(deletetodo);
    }
    catch(err){
        return res.status(401).send({message: err.message});
    }
});

module.exports = router;
