import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getjob,
  updateJob,
} from "../controllers/jobController.js";

const router = Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getjob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

// router.route('/').get(getAllJobs).post(createJob);
// router.route('/:id').get(getjob).patch(updateJob).delete(deleteJob);

export default router;
