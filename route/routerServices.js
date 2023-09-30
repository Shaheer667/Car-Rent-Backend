import express from "express";
import { getServices, addService } from "../controller/controllerServices.js";

const router = express.Router();

router.post("/getServices", getServices);
router.post("/addService", addService);

export default router;
