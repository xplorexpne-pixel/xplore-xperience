import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ziroPath = path.join(__dirname, 'public/image/ziro2.jpg');
const dzukuPath = path.join(__dirname, 'public/Northeast/Dzuku.jpg');

async function rotateImage(filePath, angle) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    console.log(`Rotating ${path.basename(filePath)} by ${angle} degrees...`);

    const tempPath = filePath + '.rotated.jpg';

    try {
        await sharp(filePath)
            .rotate(angle)
            .toFile(tempPath);

        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`Success: ${path.basename(filePath)} rotated.`);
    } catch (err) {
        console.error(`Failed to rotate ${filePath}:`, err);
    }
}

async function run() {
    // Rotating 90 degrees (Clockwise) as per screenshot description (Sky on left -> needs to move to top)
    await rotateImage(ziroPath, 90);
    // Assuming Dzuku might be similar since they are often from same source
    // await rotateImage(dzukuPath, 90); 
}

run();
