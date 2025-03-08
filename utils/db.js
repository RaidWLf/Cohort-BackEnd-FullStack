import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DBURI;

//  Utility Func to Connect to DB using Mongoose
const dbConnect = () => {
	mongoose
		.connect(url)
		.then(() => {
			console.log("connected to mongodb");
		})
		.catch((err) => {
			console.log(`error connecting to mongo db : ${err}`);
		});
};

// exporting dbConnect utility
export default dbConnect;
