import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: true,
    auth:{
    user: 'joaomatheusantunes.dev@gmail.com',     
    pass: 'vwvbtrlhaebmtsdg' }
});

export class MailOptions {
  from: 'joaomatheusantunes.dev@gmail.com';
  to: string;
  subject: string;
  html: string;

  constructor(to: string, subject: string, text: string) {
    this.to = to;
    this.subject = subject;
    this.html = text;
  }
}

export function sendEmailConfirmation(mailOptions:MailOptions){

  transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado para: ' + mailOptions.to);
        }
      });
}