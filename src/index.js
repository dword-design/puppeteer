import puppeteer from 'puppeteer'

const oldLaunch = puppeteer.launch
puppeteer.launch = function (options = {}) {
  return oldLaunch.call(this, {
    ...options,
    args: [...(options.args || []), '--no-sandbox'],
  })
}

export default puppeteer
