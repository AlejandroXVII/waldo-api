const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String },
	start_date: { type: Date, required: true },
	end_date: { type: Date },
});

module.exports = mongoose.model("user", userSchema);
