import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda'

export default async function handler(req, res) {
  try {
    const link = req.body.link;
    if (!link.includes('instagram')) {
      throw new Error('Not an Instagram link');
    }

    const LOCAL_CHROME_EXECUTABLE = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    const executablePath = await chromium.executablePath || LOCAL_CHROME_EXECUTABLE

    const browser = await puppeteer.launch({
      executablePath,
      args: chromium.args,
      headless: true,
    })

    const page = await browser.newPage();
    await page.goto(link, {waitUntil: 'networkidle0'});

    const imgClass = 'img.x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3'
    const descClass = 'h1._aacl._aaco._aacu._aacx._aad7._aade'

    const imageUrl = await page.$eval(imgClass, (el) =>
        el.getAttribute('src'));
    const description = await page.$eval(descClass, (el) =>
        el.innerText);

    await browser.close();

    res.status(200).json({imageUrl, description});
  } catch (error) {
    console.error(error);
    res.status(400).json({error: error.message});
  }
}
