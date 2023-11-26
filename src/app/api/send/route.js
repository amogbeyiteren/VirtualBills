import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

const emailUser = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export async function POST(req) {
    try {
      const { subject, firstName, lastName, email, phoneNumber, title, companyName, comment} = await req.json();
      console.log( subject, firstName, lastName, email, phoneNumber, title, companyName, comment);

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass
          },
        });

        transporter.verify((error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Ready to Send");
          }
        });
        

        const mailOption = {
            from: 'VirtualBills.ng',
            to: 'amogbeyiteren@gmail.com',
            subject: subject,
            html: `
            <h1>${subject}</h1>
            <p>Message from ${title} ${firstName} ${lastName}</p>
            
            <p>${message}</p>
            <p>Contact them </p>
            <p>Email:${email}, Phone Number:${phoneNumber}</p>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}