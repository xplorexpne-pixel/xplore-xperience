import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'public/image/hero5.jpg');

async function run() {
    console.log(`Checking ${file}`);
    if (!fs.existsSync(file)) {
        console.error("File not found!");
        return;
    }
    const stats = fs.statSync(file);
    console.log(`Size: ${stats.size}`);

    try {
        const buffer = await sharp(file)
            .resize({ width: 1920 })
            .jpeg({ quality: 80, mozjpeg: true })
            .toBuffer();

        console.log(`New size: ${buffer.length}`);
        fs.writeFileSync(file, buffer);
        console.log("Success!");
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
