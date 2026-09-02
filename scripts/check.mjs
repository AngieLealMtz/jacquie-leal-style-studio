import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const required = [
  '<!doctype html>',
  '<html lang="en">',
  'id="photoInput"',
  'id="occasion"',
  'id="season"',
  'id="generateButton"',
  'id="style-notes"'
];

const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  console.error(`Missing required elements: ${missing.join(', ')}`);
  process.exit(1);
}

const tiktokLinks = html.match(/https:\/\/www\.tiktok\.com\/t\/[A-Za-z0-9]+\//g) || [];
if (tiktokLinks.length !== 4) {
  console.error(`Expected 4 TikTok links, found ${tiktokLinks.length}.`);
  process.exit(1);
}

console.log('Validation complete: the English AI outfit preview is ready to deploy.');
