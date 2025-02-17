const router = require("express").Router()
const Todo= require("../models/Todo");

//routes will be here...
router.get("/",async(req,res) =>{
    const todos = await Todo.find();
    console.log(todos);
    res.render("index", {todo: todos})
})

module.exports = router;