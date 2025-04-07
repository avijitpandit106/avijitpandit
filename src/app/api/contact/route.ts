import connectDB from '@/app/lib/mongodb';
import contact from '@/app/models/contact';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { firstName, lastName, subject, email, message } = await request.json();

  try {
    await connectDB();

    const newContact = await contact.create({
      firstName,
      lastName,
      subject,
      email,
      message,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,
    });

    const formattedDate = new Date(newContact.date).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata', // or your timezone
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `New Message from ${firstName} ${lastName} - ${subject}`,
      html: `
    <h2>New Message from Portfolio Contact Form</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message}</p>
    <p><strong>Date:</strong><br/>${formattedDate}</p>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      console.error('Server Error:', error);
      return NextResponse.json(
        { msg: ['Internal server error'], success: false },
        { status: 500 }
      );
    }
  }
}
