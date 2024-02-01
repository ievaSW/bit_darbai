// Apsirašyti userio(vartotojo) schemą
// Pagal tą shemą susikuriam modelį
// Pagal modelį, susikuriam

const mongoose = require("mongoose");

// Apsirašome vartotojo schemą
const schema = new mongoose.Schema({
	admin:{
		type: Boolean,
        default: false,
		required: true
	},
    username: {
        // inputo duomenu tipas
        type: String,
        // laukas privalomas
        required: true,
        // unique: true,
        // Minimalus vartojo vardo ilgis
        minLength: 6,
        // Maksimalus vartotojo vardo ilgis
        maxLength: 30},
		
    email: {
        type: String,
        required: true,
        // unique: true,
        minLength: 10,
        maxLength: 120
    },
    password: {
		type: String,
		required: true,
	},
	salt: String,
	birthDate: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		required: true,
	},
	postsCount: {
		type: Number,
		default: 0,
	},
	commentsCount: {
		type: Number,
		default: 0,
	},
	likes: {
		type: Number,
		default: 0,
	},
	dislikes: {
		type: Number,
		default: 0,
	},
	admin: {
		type: Boolean,
		default: false,
		required: true,
	},
	registrationDate: {
		type: Date,
		default: new Date(),
		required: true,
	}
});

const model = mongoose.model("user", schema);
module.exports = model;
