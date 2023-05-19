require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use("/api/todo", tasksRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to db & server is running at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
