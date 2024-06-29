const express = require("express");

const UserController = require("../controller/users.js");

const router = express.Router();

//CREATE - METHOD POST
router.post("/", UserController.creatNewUsers);

//READ - METHOD READ
router.get("/", UserController.getAllUsers);

//UPDATE - METHOD PATCH
router.patch("/:id", UserController.updateUser);

//DELETE - METHOD DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
