import job from "../models/JobModel.js";

import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  try {
    const job = await job.create(req.body);
    res.status(200).json({ job });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "server error" });
  }
};

export const getjob = async (req, res) => {
  const { id } = req.params;
  const job = await job.findById(id);
  if (!job) {
    return res.status(404).json({ msg: `no ob with id ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res
      .status(400)
      .json({ message: "please provide company name and position" });
    return;
  }

  const { id } = req.params;
  const job = job.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `no job with id ${id}` });
  }
  job.company = company;
  job.position = position;

  res.status(200).json({ message: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = await job.findByIdAndDelete(id);
  if (!removeJob) {
    return res.status(400).json({ message: `no job with id ${id}` });
  }

  res.status(200).json({ message: "job deleted", job: removeJob });
};
