const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({ headless: false, defaultViewport: null});
const page = await browser.newPage();
let element, formElement, tabs;

await page.goto(`https://dev2.venetianlasvegas.com/meetings`, { waitUntil: 'networkidle0' });
element = await page.$x(`//a[contains(text(),'EVENTS')]`);
	await element[0].click();
	await new Promise(resolve =>  setTimeout(resolve, 5000));
element = await page.$x(`//a[contains(text(),'Meeting Professionals')]`);
	await element[0].click();
	await new Promise(resolve =>  setTimeout(resolve, 5000));
await browser.close();
})(); 

