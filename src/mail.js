const nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = () => {
  // 设置邮箱信息
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    service: 'QQ', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, //端口号
    secure: true, //465为true,其他为false
    auth: {
      user: process.env.MAIL, //你的邮箱
      // 这里密码不是qq密码，是你设置的smtp授权码
      pass: process.env.TOKEN,
    },
  })

  // 设置邮件信息
  let mailOptions = {
    from: process.env.MAIL, // sender address
    to: process.env.MAIL, // list of receivers
    subject: '【京东签到领京豆】更新cookie', // Subject line
    // 发送text或者html格式
    text: '当前cookie信息已失效，请登录 https://m.jd.com 重新获取新的cookie信息！',
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    if (info) {
      console.log(`邮件已发送！`)
    }
    transporter.close() //发送完毕后关闭
    // console.log('Message sent: %s', info.messageId)
    // // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
  })
}
