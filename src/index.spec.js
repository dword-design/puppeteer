import self from './index.js'

export default {
  valid: async () => {
    const browser = await self.launch()
    await browser.newPage()
    await browser.close()
  },
}
