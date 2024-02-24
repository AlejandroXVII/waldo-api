const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String },
	start_date: { type: Date, required: true },
	duration_in_seconds: { type: Number },
	game_completed: { type: Boolean },
});

module.exports = mongoose.model("user", userSchema);
