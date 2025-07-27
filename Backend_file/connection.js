const mongoose = require("mongoose");
require("dotenv").config(); // Load variables from .env

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
