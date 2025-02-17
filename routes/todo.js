const router = require("express").Router();
const Todo = require("../models/Todo");

//routes to add a new todo
router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    //save the todo
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added to todo");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  //Router to delete a todo
  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Delete Todo Successfully");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

//Route to update a todo
router.post("/update/todo/:_id", (req, res) => {
  const { _id } = req.params;
  const { todo } = req.body;

  Todo.findByIdAndUpdate(_id, { todo }, { new: true })
    .then((updatedTodo) => {
      console.log("Updated Todo Successfully", updatedTodo);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
