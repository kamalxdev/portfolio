"use server";

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.NEXT_PUBLIC_MAILERSEND_USER,
    pass: process.env.NEXT_PUBLIC_MAILERSEND_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(email:string,name:string,message:string) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Contact (kamalsingh.me)" <${process.env.NEXT_PUBLIC_MAILERSEND_USER}>`, // sender address
      to:"kamalbis.425@gmail.com", // list of receivers
      subject: `${name} sent you a message`, // Subject line
      text: `See ${name} message`, // plain text body
      html: `<b>Name: ${name}</b><br/><b>Email: ${email}</b><br/><b>Message: ${message}</b><br/>`, // html body
    });
    return {info,success:true}
      // console.log("Message sent: %s", info.accepted);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.log("Error in sending mail: "), error;
    return {success:false}
  }
}

// main().catch(console.error);
