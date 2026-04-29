// scripts/export-resume.js
import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 794, height: 1123 }) // A4 at 96dpi
await page.goto('http://localhost:5173/resume')
await page.evaluateHandle('document.fonts.ready')
await page.waitForTimeout(500) // small buffer
await page.waitForLoadState('networkidle') // waits for JS to hydrate
const mainBox = await page.locator('main').boundingBox()
console.log(mainBox)


await page.screenshot({ path: 'debug-screenshot.png', fullPage: true })

// await page.addStyleTag({
//   content: `
//     html {
//       height: auto !important;
//       margin: 0 !important;
//       padding: 0 !important;
//     }
//     body {
//       margin: 0 !important;
//       padding: 0 !important;
//       height: auto !important;
//     }
//   `
// })


await page.pdf({
  path: 'static/resume.pdf',
  format: 'A4',
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
  displayHeaderFooter: false,
  printBackground: true,
  preferCSSPageSize: true,
})
await browser.close()