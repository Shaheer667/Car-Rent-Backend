import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ashaheer667@gmail.com",
    pass: "owbb dtnb tlkj dgzc",
  },
});



async function main(email, first_name, last_name, payment) {
  let _payment;
  if (payment == "bank transfer") {
    _payment = '<br>Payment Method: Bank Transfer<br>Bank Name: ABC Bank<br>Account Holder: Jane Smith<br>Account Number: 9876543210<br>Routing Number: 123456789<br><br>';
  } else if (payment == "paypal") {
    _payment = '<br>Payment Method: PayPal<br>PayPal Email: payment@carent.com<br>PaymentType: Bank Transfer<br><br>';
  } else if (payment == "direct check") {
    _payment = '<br>Payment Method: Check<br>Check Number: 123456<br>Bank Name: XYZ Bank<br>Account Holder: John Doe<br>Payment Type: Bank Transfer<br>';
  }
  const info = await transporter.sendMail({
    from: 'CaRent | ashaheer667@gmail.com',
    to: `${email}`,
    subject: "Thank You for Choosing CaRent.com!",
    // text: "Hello world?", // plain text body
    html: `Dear ${first_name} ${last_name},<br><br>We hope you're enjoying your rental car from caRent.com. We appreciate your trust in our service and are here to assist you throughout your rental period. If you have any questions or need assistance, please don't hesitate to reach out. Safe travels!<br>${_payment}<br>Best regards,<br>Syed Shaheer Ahmed<br>Founder/CEO<br>CaRent.com<br>`,
  });
}

main().catch(console.error);

export default main;
