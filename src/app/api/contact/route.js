 import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require("nodemailer");


export async function POST(req) {
    let postData=await req.json();
    console.log('req json ',postData) // {} in our example
     let  subject = "New Order";
     let bodyData='';
     for(let key in postData){
      bodyData=bodyData+` ${key} : ${postData[key]}\n`
     }
     let  body = `New Order created.\nData : \n ${bodyData}\n\n Thank you.`;
    let mailTransporter = nodemailer.createTransport({
        service:'gmail',
        host:  "smtp.gmail.com",
        port: 587,
        auth: {
          user: 'meds24x7ustous@gmail.com',
          pass: 'pnfrngxfhevinmky',
        },
      });
      //hdil oxvj tblc fhsj
  
      let mailDetails = {
        from: 'meds24x7ustous@gmail.com',
        to: ['meds24x7ustous@gmail.com'],
        subject: subject,
        text: body,
      };
      let emailRes=await mailTransporter.sendMail(mailDetails);
      console.log('emailRes',emailRes)
    return NextResponse.json({ message: 'Order Placed. Thank you' })
    
    // Response.json({ message: 'Hello from Next.js!' })
}