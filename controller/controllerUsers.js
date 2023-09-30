import modelUsers from "../model/modelUsers.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    // Check email in users
    const user = await modelUsers.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid email" });
    }

    // Check and Compare if password is correct
    if (password != user.password) {
      return res.status(400).json({ message: "invalid password" });
    }

    // Return Response
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    // Check if user already exist
    const user = await modelUsers.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    // Creating User
    const newUser = new modelUsers({
      name,
      email,
      password,
    });
    await newUser.save();

    // Return Response
    return res.status(200).json("user created successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const editUser = async (req, res) => {};
const removeUser = async (req, res) => {};

export { login, addUser, editUser, removeUser };
