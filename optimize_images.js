import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const MAX_WIDTH = 1920;
const QUALITY = 80;
const SIZE_THRESHOLD_BYTES = 500 * 1024; // 500KB

// Helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
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

async function optimizeImages() {
    console.log('Starting image optimization...');
    const allFiles = getAllFiles(PUBLIC_DIR);

    const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    let processedCount = 0;
    let savedBytes = 0;

    for (const filePath of imageFiles) {
        try {
            const stats = fs.statSync(filePath);
            if (stats.size < SIZE_THRESHOLD_BYTES) {
                continue; // Skip small images
            }

            const relativePath = path.relative(PUBLIC_DIR, filePath);
            console.log(`Optimizing: ${relativePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

            // Use failOnError: false to handle slightly corrupt images or bad metadata
            const image = sharp(filePath, { failOnError: false });
            let metadata;
            try {
                metadata = await image.metadata();
            } catch (e) {
                console.error(`  -> Failed to read metadata for ${relativePath}: ${e.message}`);
                continue;
            }

            let pipeline = image;

            // Resize if too large
            if (metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }

            // Compress
            if (filePath.endsWith('.png')) {
                pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
            } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
                pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
            } else if (filePath.endsWith('.webp')) {
                pipeline = pipeline.webp({ quality: QUALITY });
            }

            const buffer = await pipeline.toBuffer();

            const newSize = buffer.length;
            const savings = stats.size - newSize;

            if (savings > 0) {
                fs.writeFileSync(filePath, buffer);
                console.log(`  -> New size: ${(newSize / 1024 / 1024).toFixed(2)} MB (Saved ${(savings / 1024 / 1024).toFixed(2)} MB)`);
                savedBytes += savings;
                processedCount++;
            } else {
                console.log(`  -> optimization didn't reduce size much, skipping overwrite.`);
            }

        } catch (err) {
            console.error(`Error processing ${filePath}:`, err.message);
        }
    }

    console.log('-----------------------------------');
    console.log(`Optimization complete.`);
    console.log(`Processed ${processedCount} images.`);
    console.log(`Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
