const chromium = require('chrome-aws-lambda')
const { puppeteerCookie } = require('cookie-format')
const mail = require('./mail')
require('dotenv').config()

const cookies = puppeteerCookie(process.env.COOKIE, { domain: '.jd.com' }).filter(
  item => item.name === 'pt_pin' || item.name === 'pt_key'
)

const checkinUrl = 'https://bean.m.jd.com/bean/signIndex.action'

// 签到
const app = async url => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
  try {
    const page = await browser.newPage()

    // 设置cookie
    await page.setCookie(...cookies)

    // 打开签到页面
    await page.goto(url)

    // 检测到重定向到登录页面时，发送更新cookie的邮件
    if (page.url().includes('plogin.m.jd.com')) {
      mail()
      throw new Error('cookie已失效！')
    }

    // 检测是否打开签到页面
    if (page.url().includes('bean.m.jd.com')) {
      console.log('签到成功！')
    }
  } catch (error) {
    console.log(error.message)
    await browser.close()
  } finally {
    if (browser !== null) await browser.close()
  }
}

app(checkinUrl)
