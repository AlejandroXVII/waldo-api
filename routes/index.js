var express = require("express");
var router = express.Router();
const coordinate_controller = require("../controllers/coordinateController");
const user_controller = require("../controllers/userController");

//COORDINATES

router.get("/coordinates", coordinate_controller.coordinate_list_get);

//RETURN A BOOL DEPENDING IF THE COORDINATE IS CLOSE OR FAR OF THE CHARACTER
router.get("/coordinates/:name&:x&:y", coordinate_controller.coordinate_get);

//USERS

//GET ALL THE THAT HAS FINISHED THE GAME
router.get("/users", user_controller.user_list_get);

//POST A USER WHEN THE USER OPEN THE PAGE
router.post("/users", user_controller.user_post);

//ADD THE DURATION AND NAME FOR THE USER
router.post("/users/:id", user_controller.user_put);

module.exports = router;
