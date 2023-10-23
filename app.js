const express = require("express");

// Make express app
const app = express();
// set view engine
app.set("view engine", "ejs");

// use middleware at the top or in individual endpoints
// app.use(logger);

app.use(express.static("public"));
// you need the below line to be able to access the body
app.use(express.urlencoded({ extended: true }));
// to be able to use and process JSON
app.use(express.json());

// logger can also be used in the router files
app.get("/", logger, (req, res) => {
  console.log("here");
  res.render("index", { text: "world" });
  // res.json({ message: "error" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

const PORT = 5000;

app.listen(PORT);
