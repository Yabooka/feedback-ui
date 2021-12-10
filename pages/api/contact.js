import nodemailer from 'nodemailer'
export default async (req, res) => {
  const { name, email, message, phone } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'yabooka.rs@gmail.com',
      subject: `Nova poruka od ${name}`,
      html: `
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Phone: </strong> ${phone} </p>
      <p><strong>Message: </strong> ${message} </p>

      `,
    })

    console.log('Message Sent')
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
