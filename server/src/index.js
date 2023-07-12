// server/index.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./static")));

dotenv.config();

mongoose
  .connect(process.env.MONGODB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

const authRoute = require("./routes/auth");
const projectsData = require("./routes/project");
// const bookShelfRoute = require("./routes/bookShelf");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/projectData", projectsData);
// app.use("/api/v1/book", bookShelfRoute);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
