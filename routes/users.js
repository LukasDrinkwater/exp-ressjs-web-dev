const express = require("express");
const router = express.Router();

// the path doesnt need users becuse its in the users.js router file
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("user list");
});

router.get("/new", (req, res) => {
  // res.send("user new form");
  res.render("users/new");
});

router.post("/", (req, res) => {
  // res.send("Create user");
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("errro");
    res.render("users/new", { firstName: req.body.firstName });
  }
  // console.log(req.body.firstName);
  // res.send("hi");
});

// dynamic parameter
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

// if a route ever has an id
// Its middleware
const users = [{ name: "kyle" }, { name: "sally" }];
router.param("id", (req, res, next, id) => {
  // if its a get it does this before it finished the .get.
  // So thats why the .get above has access to req.user
  req.user = users[id];
  // console.log(id);
  next();
});

// router.get("/:id", (req, res) => {
//   res.send(`Get user with ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update user with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete user with ID ${req.params.id}`);
// });

module.exports = router;
