const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model"); // Assuming your model file is named model.js

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

require("./connection"); // Your MongoDB connection

// ✅ Fix: Match this route to frontend
app.post("/api/employees", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.status(201).send({ message: "Employee added" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to add employee" });
  }
});

// (Optional) GET API if needed
app.get("/api/employees", async (req, res) => {
  try {
    const employees = await BlogModel.find();
    res.json(employees);
  } catch (error) {
    res.status(500).send({ message: "Error fetching employees" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
