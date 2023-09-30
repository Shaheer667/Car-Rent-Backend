import mongoose from "mongoose";

const modelUsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  designation: { type: String, required: false },
  image: { type: String, required: false },
  social_links: {
    type: [
      {
        type: String,
        required: false,
      },
    ],
    required: false,
  },
});

const modelUsers = mongoose.model("users", modelUsersSchema);

export default modelUsers;
