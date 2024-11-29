import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { fullName, mobileNumber, city, email, queries } = req.body;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'qqamarsultana@gmail.com', // Your email user
      pass: 'amjh bkkx zbkz ddkz', // Your email password
    },
  });

  // Email options for user
  const userMailOptions = {
    from: 'qqamarsultana@gmail.com', // sender address
    to: email, // receiver's email
    subject: 'Thank you for contacting us', // Subject line
    text: `Dear ${fullName},\n\nThank you for reaching out to us. We have received your query and will get back to you soon.\n\nBest regards,\nYour Company`, // plain text body
    html: `<p>Dear ${fullName},</p><p>Thank you for reaching out to us. We have received your query and will get back to you soon.</p><p>Best regards,<br>Your Company</p>`, // html body
  };

  // Email options for admin
  const adminMailOptions = {
    from: 'qqamarsultana@gmail.com', // sender address
    to: 'qqamarsultana@gmail.com', // admin's email
    subject: 'New Contact Form Submission', // Subject line
    text: `New contact form submission:\n\nFull Name: ${fullName}\nMobile Number: ${mobileNumber}\nCity: ${city}\nEmail: ${email}\nQueries: ${queries}`, // plain text body
    html: `<p>New contact form submission:</p><p><strong>Full Name:</strong> ${fullName}</p><p><strong>Mobile Number:</strong> ${mobileNumber}</p><p><strong>City:</strong> ${city}</p><p><strong>Email:</strong> ${email}</p><p><strong>Queries:</strong> ${queries}</p>`, // html body
  };

  try {
    // Send email to user
    await transporter.sendMail(userMailOptions);
    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
