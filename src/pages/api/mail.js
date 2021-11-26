const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
    
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'w.hamilton@draxybearwd.com',
    from: 'admin@draxybearwd.com',
    subject: 'New message from Portfolio Contact Form',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data);

  res.status(200).json({ status: 'Ok' });
}