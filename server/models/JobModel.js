import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my-city",
    },
  },
  {
    timestamps: true,
  },
);

const jobModel = mongoose.model("Job", JobSchema);

export default jobModel;
