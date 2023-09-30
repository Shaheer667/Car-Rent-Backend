import modelReservation from "../model/modelReservation.js";
import mail from "../utilities/nodemailer.js";

const reservation = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      pickup_location,
      drop_location,
      pickup_date,
      pickup_time,
      message,
      payment,
    } = req.body;
    console.log(req.body)
    if (
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !pickup_location ||
     
      !pickup_time ||
      !drop_location ||
      !message ||
      !payment
    ) {
      return res.status(400).json({ message: "all fields are required" });
    }

    // Check if car already booked
    // const booking = await modelReservation.findOne({})

    // Sending Data to Database
    // const newBooking = new modelReservation(
    //   first_name,
    //   last_name,
    //   email,
    //   phone,
    //   pickup_location,
    //   drop_location,
    //   pickup_date,
    //   pickup_time,
    //   message,
    //   payment
    // );
    // await newBooking.save();
    const newBooking = new modelReservation({
      first_name,
      last_name,
      email,
      pickup_location,
      drop_location,
      pickup_date,
      pickup_time,
      message,
      payment,
    });
    await newBooking.save();
    mail(email, first_name, last_name, payment);

    // Return Response
    res.status(200).json("Booking has been done!");
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

export { reservation };
