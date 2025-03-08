import mongoose, { Schema } from "mongoose";

const UserShema = new Schema(
	{
		name: String,
		email: String,
		password: String,
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
		},
		resetPassToken: {
			type: String,
		},
		resetPassExpiry: {
			type: Date,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserShema);

export default User;
