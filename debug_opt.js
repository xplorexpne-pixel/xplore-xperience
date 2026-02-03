import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToProcess = path.join(__dirname, 'public/image/hero5.jpg');

async function testOptimize() {
    console.log(`Processing ${fileToProcess}`);
    try {
        if (!fs.existsSync(fileToProcess)) {
            console.error("File does not exist!");
            return;
        }

        const buffer = await sharp(fileToProcess)
            .resize({ width: 1920 })
            .jpeg({ quality: 80, mozjpeg: true })
            .toBuffer();

        console.log(`Optimized size: ${buffer.length}`);

        // Try writing to a new file first
        const newPath = path.join(__dirname, 'public/image/hero5_opt.jpg');
        fs.writeFileSync(newPath, buffer);
        console.log("Written to hero5_opt.jpg");

        // Now try overwriting
        fs.writeFileSync(fileToProcess, buffer);
        console.log("Overwritten hero5.jpg");

    } catch (error) {
        console.error("Error:", error);
    }
}

testOptimize();
