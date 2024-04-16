import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ExpressError from "./utils/ExpressError.js";
import MongoStore from "connect-mongo";
import { Sales } from "./Data/Sales.js";
import { Student } from "./Data/Student.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URL = "mongodb://127.0.0.1:27017/EduTrack";

// const store = MongoStore.create({
//   mongoUrl: MONGO_URL,
//   crypto: {
//     secret: "f-17vv",
//   },
//   touchAfter: 24 * 3600,
// });

// store.on("error", function () {
//   console.log("ERROR_IN_MONGO_SESSION_STORE");
// });

const app = express();
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.use("/api/user", userRoutes);

//add loggedIn middleware
app.get("/api/sales", (req, res) => {
  res.status(200).json(Sales);
});

app.get("/api/students", (req, res) => {
  res.status(200).json(Student);
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong!" } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, function () {
  console.log(`Server running on port:${PORT}`);
});
