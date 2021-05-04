import nodemailer from 'nodemailer';
import {save_email_format} from '../../models/emails/save_email_format.js';
export const send_email = (data_email,res) => {
  let {from_field,to_field,subject_field,message_field} = data_email;
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
     user: 'angel.torp@ethereal.email',
     pass: '1ZkT5NNMH5vdqeHp4N',
    },
  });

  const mailOptions = {
    from:from_field,
    to:to_field,
    subject:subject_field,
    text:message_field
  }

  transporter.sendMail(mailOptions, (err,info) => {
    if(err){
      console.log(err);
    }
     console.log(info);
  });
  save_email_format(data_email,res);
};
