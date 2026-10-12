/**
 * Creates placeholder images so the site builds before real photos are supplied.
 * Never overwrites an existing file. Replace the generated files with your real photos.
 */
import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const dir = 'src/assets/images';
mkdirSync(dir, { recursive: true });

const placeholders = [
  { file: 'profile.jpg', width: 800, height: 800, label: 'HR' },
  { file: 'smart-bangladesh-summit.jpg', width: 2000, height: 500, label: 'Photo placeholder — smart-bangladesh-summit.jpg' },
];

for (const { file, width, height, label } of placeholders) {
  const path = `${dir}/${file}`;
  if (existsSync(path)) {
    console.log(`skip  ${path} (exists)`);
    continue;
  }
  const fontSize = Math.round(Math.min(width, height) / (label.length > 4 ? 10 : 3));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="#0B2545"/>
    <text x="50%" y="50%" fill="#ffffff" fill-opacity="0.85" font-family="Arial, sans-serif" font-size="${fontSize}"
      font-weight="600" text-anchor="middle" dominant-baseline="central">${label}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(path);
  console.log(`made  ${path}`);
}
