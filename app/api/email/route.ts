import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { fullName, mobileNumber, city, email, queries } = await req.json();
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'aliyansiddiqui555@gmail.com',
        pass: 'ewro ooqr sfyh ydvg',
      },
    });
    const adminMailOptions = {
      from: email, 
      to: 'ibrahim.qazi@adamjeelife.com,ikramkhan214243@gmail.com,Rahila.ashraf@adamjeelife.com', 
      subject: 'Kahani Suno Query Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
            <h2 style="color: #1e90ff;">Kahani Suno Query Form Submission</h2>
            <p style="font-size: 16px; color: #333333;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="font-size: 16px; color: #333333;"><strong>Mobile Number:</strong> ${mobileNumber}</p>
            <p style="font-size: 16px; color: #333333;"><strong>City:</strong> ${city}</p>
            <p style="font-size: 16px; color: #333333;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #333333;"><strong>Queries:</strong> ${queries}</p>
          </div>
          <div style="max-width: 600px; margin: 20px auto 0; text-align: center;">
            <p style="font-size: 14px; color: #777777;">This email was sent automatically. Please do not reply.</p>
          </div>
        </div>
      `, // html body
    };

    await transporter.sendMail(adminMailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
