import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const required = [
  '<!DOCTYPE html>',
  'id="figPhotoInput"',
  'id="figureGrid"',
  'id="estacionGrid"',
  'id="paletteGroups"',
  'id="outfitsContainer"',
  'localStorage'
];

const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  console.error(`Faltan elementos requeridos: ${missing.join(', ')}`);
  process.exit(1);
}

if (html.includes('window.storage')) {
  console.error('Aún existe una dependencia no compatible con navegadores estándar: window.storage');
  process.exit(1);
}

console.log('Validación completada: HTML y flujo base listos para despliegue.');
