import job from "../models/JobModel.js";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customError.js";

export const getAllJobs = async (req, res) => {
  const jobs = await job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  try {
    const job = await job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
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
  if (!job) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updateJob = await job.findByIdAndDelete(id, req.body, {
    new: true,
  });

  if (!updateJob) throw new NotFoundError(`no job with id ${id}`);
  res.status(404).json({ message: `no job with id ${id}` });

  res.status(StatusCodes.OK).json({ message: "job modified", job: updateJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `invalid job id ${id}` });
  }

  const removeJob = await job.findByIdAndDelete(id);
  console.log(removeJob);

  if (!removeJob) throw new NotFoundError(`no job with id ${id}`);

  res.status(404).json({ message: `no job with id ${id}` });

  res.status(StatusCodes.OK).json({ message: "job deleted", job: removeJob });
};
