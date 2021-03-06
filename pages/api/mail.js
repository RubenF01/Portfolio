/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

    const data = {
      to: "admin@rubenfrias.com",
      from: "sender@rubenfrias.com",
      subject: body.subject,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);

    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(500).json({ status: "Error", error });
  }
};
