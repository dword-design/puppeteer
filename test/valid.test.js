import puppeteer from '@dword-design/puppeteer'

export default async () => {
  const browser = await puppeteer.launch()
  await browser.newPage()
  await browser.close()
}