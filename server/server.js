import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import { nanoid } from "nanoid";

const app = express();

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];
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

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data recieved", data: req.body });
});

//get all jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

//create job
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ message: "please provide comapny and position" });
    return;
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

//get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no ob with id ${id}` });
  }
  res.status(200).json({ job });
});

//edit job
app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res
      .status(400)
      .json({ message: "please provide company name and position" });
    return;
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `no job with id ${id}` });
  }
  job.company = company;
  job.position = position;

  res.status(200).json({ message: "job modified", job });
});

//delete job
app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(400).json({ message: `no job with id ${id}` });
  }
  const newJob = jobs.filter((job) => job.id != id);
  jobs = newJob;
  res.status(200).json({ message: "job deleted" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server sarting on port ${port}`);
});
