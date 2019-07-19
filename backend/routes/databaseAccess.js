const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.post("/add", (req, res) => {
    console.log(req.body);
  const todo = new TodoItem({
    task: req.body.task,
    completed: false
  });

  todo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});
module.exports = router;
