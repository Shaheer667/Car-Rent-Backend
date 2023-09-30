import modelServices from "../model/modelServices.js";

const getServices = async (req, res) => {
  try {
    // Check email in users
    const service = await modelServices.find();
    if (!service) {
      return res.status(400).json({ message: "no service available" });
    }

    // Return Response
    res.status(200).json(service);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const addService = async (req, res) => {
  try {
    const { name, description, icon } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "name & description required" });
    }

    // Check if service already exist
    const service = await modelServices.findOne({ name });
    if (service) {
      return res.status(400).json({ message: "service already exist" });
    }

    // Creating Service
    const newService = new modelServices({
      name,
      description,
      icon,
    });
    await newService.save();

    // Return Response
    return res.status(200).json("service created successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const getService = async (req, res) => {};
const editService = async (req, res) => {};
const removeService = async (req, res) => {};

export { getServices, getService, addService, editService, removeService };
