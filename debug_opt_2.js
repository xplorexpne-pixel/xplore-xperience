import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToProcess = path.join(__dirname, 'public/image/hero5.jpg');
const logFile = path.join(__dirname, 'error_log.txt');

async function testOptimize() {
    try {
        const buffer = await sharp(fileToProcess)
            .resize({ width: 1920 })
            .jpeg({ quality: 80 })
            .toBuffer();
        fs.writeFileSync(logFile, "Success!", 'utf8');
    } catch (error) {
        fs.writeFileSync(logFile, `Error Stack: ${error.stack}\nError Message: ${error.message}`, 'utf8');
    }
}

testOptimize();
