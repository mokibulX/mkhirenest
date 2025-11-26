require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index", { emailJsKey: process.env.EMAILJS_PUBLIC_KEY });
});


app.get("/product", (req, res) => {
  res.render("product");
});
///privacy
app.get("/privacy", (req, res) => {
  res.render("privacy");
});
//// terms
app.get("/terms", (req, res) => {
  res.render("terms");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});



/////evry root
app.get('', (req, res) => res.redirect('/'));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Order API
app.post("/order", (req, res) => {
  const { name, email, product, price, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: `New Order: ${product}`,
    html: `
      <h2>New Order Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(" Email sending error:", err);
      return res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log(" Email sent:", info.response);
      return res.json({ success: true, message: "Order received and email sent" });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
