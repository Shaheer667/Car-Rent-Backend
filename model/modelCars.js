import mongoose from "mongoose";

const modelCarsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: [{ type: String }] },
  price: { type: String },
  description: { type: String },
  location: { type: String },
  features: { type: [{ type: String }] },
});

const modelCars = mongoose.model("cars", modelCarsSchema);

export default modelCars;
