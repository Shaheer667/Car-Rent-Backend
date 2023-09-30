import express from "express";
import { getCar, getCars, addCar } from "../controller/controllerCars.js";

const router = express.Router();

router.post("/getCars", getCars);
router.post("/getCar", getCar);
router.post("/addCar", addCar);

export default router;
