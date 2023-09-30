import express from "express";
import { reservation } from "../controller/controllerReservation.js";

const router = express.Router();

router.post("/reservation", reservation);

export default router;
