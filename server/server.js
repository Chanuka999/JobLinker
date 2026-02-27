import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import JobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();

try {
  const responce = await fetch(
    "https://www.course-api.com/react-useReducer-cart-project",
  );
  const cartData = await responce.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 50 })
      .withMessage("name must be at least 50"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessage });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}` });
  },
);

app.use("/api/v1/jobs", JobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server sarting on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
