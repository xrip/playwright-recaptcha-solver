import { chromium } from 'playwright-core';
import { solveCaptcha } from './index';

(async () => {

    const browser = await chromium.launch({
        headless: false,
        args: [
            '--disable-site-isolation-trials',
            '--disable-features=site-per-process,SitePerProcess',
            '--disable-blink-features=AutomationControlled',
            '--enable-features=UserAgentClientHint',
        ],

    });

    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    await page.goto('https://www.google.com/recaptcha/api2/demo');

    await solveCaptcha(page);

    console.log('done');

    await browser.close();
})();

