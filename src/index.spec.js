import self from '.'

export default {
  valid: async () => {
    const browser = await self.launch()
    await browser.newPage()
    await browser.close()
  },
}
