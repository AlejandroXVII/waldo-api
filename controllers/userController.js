const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const { sortBy } = require("lodash");

exports.user_list_get = asyncHandler(async (req, res, next) => {
	const allUser = await User.find({ game_completed: true })
		.sort({ duration_in_seconds: 1 })
		.exec();
	return res.json(Object.values(allUser));
});

exports.user_post = asyncHandler(async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.send(400);
		return;
	} else {
		const user = new User({
			start_date: new Date(),
			game_completed: false,
		});
		await user.save();
		return res.status(200).json(user._id);
	}
});

exports.user_put = asyncHandler(async (req, res, next) => {
	const errors = validationResult(req);
	const userData = await User.findById(req.params.id).exec();
	time =
		(new Date(req.body.end_date).getTime() -
			userData.start_date.getTime()) /
		1000;
	console.log(time);
	const user = new User({
		name: req.body.name,
		game_completed: true,
		duration_in_seconds: time,
		_id: req.params.id,
	});
	if (!errors.isEmpty()) {
		return res.send(400);
	} else {
		let updatedUser = await User.findByIdAndUpdate(req.params.id, user, {});
		return res.status(200).json(updatedUser);
	}
});
