# Google ReCaptcha V2 Solver for [Playwright](https://playwright.dev/)

![demo](demo1.gif)

### If you like this project feel free to donate!

[![Donate with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/paypalme/xrip/)

## Installation

```sh
yarn add https://github.com/xrip/puppeteer-recaptcha-solver.git
```

## Example
```js
    import { chromium } from 'playwright';
    import { solveCaptcha } from 'playwright-recaptcha-solver';

    (async () => {

        const browser = await chromium.launch({
            headless: false,
            args: [
                '--disable-site-isolation-trials',
                '--disable-features=site-per-process,SitePerProcess',
                '--disable-blink-features=AutomationControlled',
            ],

        });

        const ctx = await browser.newContext();
        const page = await ctx.newPage();

        await page.goto('https://www.google.com/recaptcha/api2/demo');

        await solveCaptcha(page);

        console.log('done');
    })();
```
## Known issues

![](https://user-images.githubusercontent.com/3437378/82528851-b14e5a80-9b07-11ea-9f30-6f4fbef0ff1f.png)

Sometimes you are blocked because of the reputation of the your IP. 
To avoid this, you can try to buy some residential proxies or run a simple version of the demo without a proxy.

## Credits
- Based on puppeteer-recaptcha-solver by [danielgatis](https://github.com/danielgatis/puppeteer-recaptcha-solver) 
