const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);
router.route("/mysql").get(userController.getAllMysqlUsers);

module.exports = router;
