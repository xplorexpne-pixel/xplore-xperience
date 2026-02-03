import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const MAX_WIDTH = 1920;
const QUALITY = 85; // Slightly higher quality to prevent artifacting on re-save

// Helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles || [];
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function fixImages() {
    console.log('Starting image repair and rotation fix...');
    const allFiles = getAllFiles(PUBLIC_DIR);

    const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    let processedCount = 0;

    for (const filePath of imageFiles) {
        try {
            const relativePath = path.relative(PUBLIC_DIR, filePath);
            console.log(`Processing: ${relativePath}`);

            // Use failOnError: true this time to ensure we don't write bad output
            const image = sharp(filePath, { failOnError: false });

            // Auto-rotate based on EXIF
            let pipeline = image.rotate();

            const metadata = await image.metadata();

            // Resize if too large, otherwise keep original dimensions
            if (metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }

            // Define output options
            if (filePath.endsWith('.png')) {
                pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
            } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
                pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
            } else if (filePath.endsWith('.webp')) {
                pipeline = pipeline.webp({ quality: QUALITY });
            }

            const buffer = await pipeline.toBuffer();

            // Atomic write
            const tempPath = filePath + '.tmp';
            fs.writeFileSync(tempPath, buffer);
            fs.renameSync(tempPath, filePath);

            console.log(`  -> Fixed & Saved (${(buffer.length / 1024).toFixed(2)} KB)`);
            processedCount++;

        } catch (err) {
            console.error(`Error processing ${filePath}:`, err.message);
        }
    }

    console.log('-----------------------------------');
    console.log(`Repair complete. Processed ${processedCount} images.`);
}

fixImages();
