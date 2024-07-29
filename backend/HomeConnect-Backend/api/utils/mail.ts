import nodeMailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from "dotenv";
// import url from 'url';
dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST 
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER 
const SMTP_PASSWORD = process.env.SMTP_PASSWORD 
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS

  // send Reset Link


//   export const sendResetEmail = async (email: string, resetToken: string, path: string) => {
//     const resetLink = url.format({
//         protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
//         hostname:  process.env.HOST_PROTOCOL  as string,
//         pathname: `/${path}/${resetToken}`,
//     });

//     return resetLink;
// };
export const sendResetEmail = async (email: string, resetToken: string, path: string) => {
    const resetLink = `${process.env.NODE_ENV === 'production' ? 'https:' : 'http:'}//${process.env.HOST_PROTOCOL}:/${path}/${resetToken}`;
    return resetLink;
};

  export async function resetLink(email:string, rlink:string) {
    try{
    // Create a nodemailer transporter using your SMTP server settings
    const transporter = nodeMailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
// 
// Configure mailgen by setting a theme and your product info
const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'HomeConnect',
      link: 'https://homeconnect.com/',
      // Optional product logo
      logo: 'https://icon-library.com/images/home-app-icon/home-app-icon-26.jpg'
  }
});

var sendMail: any = {
  body: {
      name: `${email.split('@')[0]}`,
      intro: 'Welcome to Homeconnect ',
      action: {
          instructions: 'Click on the link. link expires in 30 minutes',
          button: {
              color: '#f7ad3e', // Optional action button color
              text: 'CLICK HERE',
              link:  rlink
          }
      },
      outro: 'Need help, or have questions? contact us at customer-care@homeconnect.com, we\'d love to help.'
  }
};

var emailBody = mailGenerator.generate(sendMail);


    // Configure the email options
    const mailOptions = {
      from: EMAIL_ADDRESS, // Replace with your sender email address
      to: email,
      subject: 'Reset Password Link',
      html: emailBody,
    };

      // Send the email and await the result
      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent:', info.response);

  }catch(error){
    console.log('Error sending link via email:', error);
    throw new Error('Failed to send link. Please try again later.')
  }
  };


