const express = require("express");
const app = express();
const body_parser = require("body-parser");
const PORT = 3000;
const nameDir = require("./util/path");
const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");
const path = require("path");
// use of body parser function
app.use(body_parser.urlencoded({ extended: false }));

// use of filtering
app.use("/books", bookRouter);
app.use("/users", userRouter);

// creation of static files
app.use(express.static(path.join(nameDir, "public")));

// creation of route's

// first route
app.get("/", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "index.html"));
});

// page not found
app.use("/", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "pageNotFound.html"));
});

// server start
app.listen(PORT, () => {
  console.log("Server start at port number", PORT);
});
