// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Configure your SMTP transporter.
  // In production, make sure to set environment variables in Vercel/Render/Netlify.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // e.g. "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,                     // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,     // e.g. your Gmail address
      pass: process.env.SMTP_PASS,     // e.g. your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MY_PERSONAL_EMAIL, // the email address where you want to receive messages
      subject: `New message from ${name} <${email}>`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
