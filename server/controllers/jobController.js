import job from "../models/JobModel.js";
import mongoose from "mongoose";

export const getAllJobs = async (req, res) => {
  const jobs = await job.find({});
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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `invalid job id ${id}` });
  }

  const job = await job.findById(id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updateJob = await job.findByIdAndDelete(id, req.body, {
    new: true,
  });

  if (!updateJob) {
    return res.status(404).json({ message: `no job with id ${id}` });
  }

  res.status(200).json({ message: "job modified", job: updateJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `invalid job id ${id}` });
  }

  const removeJob = await job.findByIdAndDelete(id);
  console.log(removeJob);

  if (!removeJob) {
    return res.status(404).json({ message: `no job with id ${id}` });
  }

  res.status(200).json({ message: "job deleted", job: removeJob });
};
