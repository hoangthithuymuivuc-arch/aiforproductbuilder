import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone } = req.body

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // Cấu hình Gmail SMTP
  // Để bảo mật, nên dùng App Password thay vì mật khẩu thường
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,     // email gửi (ví dụ: hoangthithuymuivuc@gmail.com)
      pass: process.env.EMAIL_PASS,     // App Password từ Google
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'hoangthithuymuivuc@gmail.com',
    subject: `[Product Academy] Đăng ký mới từ ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #ff71f9;">🎉 Đăng ký mới!</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Họ và tên:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Số điện thoại:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Thời gian đăng ký: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ message: 'Failed to send email' })
  }
}
