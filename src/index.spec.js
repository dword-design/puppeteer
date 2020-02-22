import puppeteer from '@dword-design/puppeteer'

export default {
  valid: async () => {
    const browser = await puppeteer.launch()
    await browser.newPage()
    await browser.close()
  },
}
