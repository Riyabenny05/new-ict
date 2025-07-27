const express = require("express");
const router = express.Router();
const BlogModel = require("../model"); // Adjust path if needed

// POST - Add employee
router.post("/api/employees", async (req, res) => {
  try {
    console.log(req.body);
    const newEmp = new BlogModel(req.body);
    await newEmp.save();
    res.status(201).json({ message: "Employee added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add employee" });
  }
});

// GET - Get all employees
router.get("/api/employees", async (req, res) => {
  try {
    const employees = await BlogModel.find();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch employees" });
  }
});

module.exports = router;
