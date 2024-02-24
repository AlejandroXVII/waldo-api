var express = require("express");
var router = express.Router();
const coordinate_controller = require("../controllers/coordinateController");

router.get("/coordinates", coordinate_controller.coordinate_list_get);

router.get("/coordinates/:name", coordinate_controller.coordinate_get);

module.exports = router;
