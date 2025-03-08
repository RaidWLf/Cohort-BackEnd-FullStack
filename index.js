import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
	cors({
		origin: process.env.BASE,
		methods: ["GET"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello to Fullstack Version 01");
});

app.get("/ambuj", (req, res) => {
	res.send("Hello Ambuj");
});

dbConnect();

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
