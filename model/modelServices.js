import mongoose from "mongoose";

const modelServicesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: false },
});

const modelServices = mongoose.model("services", modelServicesSchema);

export default modelServices;
