import dotenv from "dotenv";
import express from "express";
import connect_database from "./db/index.js";
import cors from "cors";
import routerUsers from "./route/routerUsers.js";
import routerServices from "./route/routerServices.js";
import routerCars from "./route/routerCars.js";
import routerReservation from "./route/routerReservation.js";

dotenv.config({ path: "./.env" }); // setting .env file path

const app = express(); // creating app to run
const port = process.env.PORT || 5000; // port on which our server runs

// ---- JSON
app.use(express.json()); // so that we can use req.body as json

// ---- CORS
app.use(cors());

// ---- Database
connect_database();

// ---- Routes
app.use("/api/", routerUsers);
app.use("/api/", routerServices);
app.use("/api/", routerCars);
app.use("/api/", routerReservation);
// app.use("/api/", routerOurStaff);
// app.use("/api/", routerTestimonials);
// app.use("/api/", routerContactInfo);
// app.use("/api/", routerSponsors);

// ---- Running Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
