import mongoose from "mongoose";

const connect_database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Database Successfully Connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connect_database;
