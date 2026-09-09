import fs from 'node:fs'
import { chromium } from 'playwright'
const logo = fs.readFileSync('public/brand-logo.png').toString('base64')
const browser = await chromium.launch({
  headless: true,
  channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(
  `<html><head><style>*{box-sizing:border-box}body{margin:0;background:#111210;color:#f0f0e8;font-family:Arial,sans-serif;padding:65px 75px}header{display:flex;justify-content:space-between;align-items:center;font-size:16px;color:#b3bba6}header b{font-size:24px;color:#f0f0e8}h1{font-size:74px;line-height:1.08;letter-spacing:-3px;font-weight:700;margin:55px 0 35px}em{font-family:Georgia,serif;font-style:italic;font-weight:400;color:#cefa69}header b{display:flex;align-items:center;gap:15px}header img{width:45px;height:45px}body{background-image:linear-gradient(#cefa6909 1px,transparent 1px),linear-gradient(90deg,#cefa6909 1px,transparent 1px);background-size:36px 36px}.bottom{display:flex;justify-content:space-between;border-top:1px solid #39412e;padding-top:27px;font-size:15px;color:#b3bba6}.star{position:absolute;right:90px;top:235px;font-size:130px;color:#cefa69}i{color:#cefa69;font-style:normal}</style></head><body><header><b><img src="data:image/png;base64,${logo}" alt="" />pedro luis</b><span>DESENVOLVEDOR FRONT-END</span></header><h1>Código na cabeça.<br><em>Criatividade</em><br>em cada clique.</h1><span class="star">✳</span><div class="bottom"><span>React · JavaScript · Design responsivo</span><span>Conheça meus projetos ↗</span></div></body></html>`,
)
await page.screenshot({ path: 'public/social-cover.png' })
await browser.close()
