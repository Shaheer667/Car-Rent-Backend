import modelCars from "../model/modelCars.js";

const getCars = async (req, res) => {
  try {
    // Check email in users
    const cars = await modelCars.find();
    if (!cars) {
      return res.status(400).json({ message: "no service available" });
    }

    // Return Response
    res.status(200).json(cars);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const getCar = async (req, res) => {
  try {
    const {id} = req.body;

    // Check email in users
    const car = await modelCars.findOne({_id:id});
    if (!car) {
      return res.status(400).json({ message: "no Car available" });
    }

    // Return Response
    res.status(200).json(car);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const addCar = async (req, res) => {
  try {
    const { name, image, price, description, location, features } = req.body;
    if (!name || !image || !price || !description || !location) {
      return res.status(400).json({ message: "all fields are required" });
    }

    // Adding Car
    const newCar = new modelCars({
      name,
      image,
      price,
      description,
      location,
      features
    });
    await newCar.save();

    // Return Response
    return res.status(200).json("car added successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};
const editCar = async (req, res) => {};
const removeCar = async (req, res) => {};

export { getCar, getCars, addCar, editCar, removeCar };
