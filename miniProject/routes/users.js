const express = require("express");
const path = require("path");
const nameDir = require("../util/path");
const { route } = require("../../3rdDay/routes/course");
const router = express.Router();

// creation of route's

// first route
router.get("/users", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "userList.html"));
});

// second route
router.get("/users/add", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "user.html"));
});

// third route
router.post("/add", (req, res) => {
  console.log(req.body);
  res.redirect("/add");
});

module.exports = router;
