const express = require("express");
const {
  getTasks,
  searchTasks,
  getSingleTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);

router.get("/search", searchTasks);

router.get("/:id", getSingleTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

module.exports = router;
