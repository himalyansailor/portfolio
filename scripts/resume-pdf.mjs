// Exports /resume to public/Sachin-Sharma-Resume.pdf.
// Usage: npm run build, serve ./out (npm start), then: npm run resume
import { chromium } from "playwright";

const url = process.env.RESUME_URL ?? "http://localhost:4173/resume";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.pdf({ path: "public/Sachin-Sharma-Resume.pdf", format: "A4", printBackground: true });
const pages = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight / 1123));
await browser.close();
console.log(`Wrote public/Sachin-Sharma-Resume.pdf from ${url} (~${pages} page(s) tall)`);
