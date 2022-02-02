const puppeteer = require('puppeteer');

(async function main(){
    try {
        const browser = await puppeteer.launch({ headless: true, slowMo: 1000 });
        const page = await browser.newPage();
        await page.goto('https://dev2.venetianlasvegas.com/meetings', {waitUntil: 'domcontentloaded'});
        await page.screenshot({path: 'meetings.png'})

        await new Promise(resolve =>  setTimeout(resolve, 5000));
        console.log('done');
        await browser.close();
    } catch (e) {
        console.log('Err', e);
    }
})();