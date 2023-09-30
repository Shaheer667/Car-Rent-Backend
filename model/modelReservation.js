import mongoose from "mongoose";

const modelReservationSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  pickup_location: { type: String, required: true },
  drop_location: { type: String, required: true },
  pickup_date: { type: String, required: false },
  pickup_time: { type: String, required: true },
  message: { type: String, required: false },
  payment: { type: String, required: false },
  // user: { type: Schema.Types.ObjectId, ref: "users" },
  // car: { type: Schema.Types.ObjectId, ref: "cars" },
  // reserved: { type: Boolean, required: false, default: false },
});

const modelReservation = mongoose.model("reservations", modelReservationSchema);

export default modelReservation;
