var express = require("express");
var router = express.Router();
const coordinate_controller = require("../controllers/coordinateController");
const user_controller = require("../controllers/userController");

//COORDINATES

router.get("/coordinates", coordinate_controller.coordinate_list_get);

router.get("/coordinates/:name", coordinate_controller.coordinate_get);

//USERS

//GET ALL THE THAT HAS FINISHED THE GAME
router.get("/users", user_controller.user_list_get);

//POST A USER WHEN THE USER OPEN THE PAGE
router.post("/users", user_controller.user_post);

//ADD THE DURATION AND NAME FOR THE USER
router.put("/users/:id", user_controller.user_put);

module.exports = router;
