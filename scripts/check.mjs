import { access, readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const required = [
  '<!doctype html>',
  '<html lang="en">',
  'id="photoInput"',
  'id="occasion"',
  'id="season"',
  'id="generateButton"',
  'id="style-notes"',
  'assets/jacquie-leal.jpg'
];

const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  console.error(`Missing required elements: ${missing.join(', ')}`);
  process.exit(1);
}

const tiktokLinks = html.match(/https:\/\/www\.tiktok\.com\/t\/[A-Za-z0-9]+\//g) || [];
const uniqueTikTokLinks = new Set(tiktokLinks);
const embeddedTikToks = html.match(/data-video-id="\d+"/g) || [];
if (uniqueTikTokLinks.size !== 4 || embeddedTikToks.length !== 4) {
  console.error(`Expected 4 unique TikTok links and 4 embedded videos; found ${uniqueTikTokLinks.size} links and ${embeddedTikToks.length} embeds.`);
  process.exit(1);
}

await access(new URL('../assets/jacquie-leal.jpg', import.meta.url));

console.log('Validation complete: the English AI outfit preview is ready to deploy.');
