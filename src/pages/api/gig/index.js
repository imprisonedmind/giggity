import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    const link = req.body.link;
    if (!link.includes('instagram')) {
      throw new Error('Not an Instagram link');
    }

    const options = process.env.AWS_REGION
        ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless
        }
        : {
          args: [],
          executablePath:
              process.platform === 'win32'
                  ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
                  : process.platform === 'linux'
                      ? '/usr/bin/google-chrome'
                      : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        };

    // Launch Puppeteer with the selected proxy
    const browser = await puppeteer.launch(options);

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
