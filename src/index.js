import puppeteer from 'puppeteer'
import isGitpod from 'is-gitpod'

const oldLaunch = puppeteer.launch
puppeteer.launch = async function (options = {}) {
  return oldLaunch.call(this, {
    ...options,
    args: [...options.args || [], ...(await isGitpod()) ? ['--no-sandbox'] : []],
  })
}

export default puppeteer