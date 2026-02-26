import fs from 'fs';

const data = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
const metrics = data.audits;

console.log('--- Largest Contentful Paint Element ---');
const lcpElement = metrics['largest-contentful-paint-element']?.details?.items;
if (lcpElement) {
    console.log(JSON.stringify(lcpElement, null, 2));
}

console.log('\n--- Unoptimized Images ---');
const unoptimizedImages = metrics['uses-optimized-images']?.details?.items;
if (unoptimizedImages) {
    console.log(JSON.stringify(unoptimizedImages, null, 2));
}

console.log('\n--- Render Blocking Resources ---');
const renderBlocking = metrics['render-blocking-resources']?.details?.items;
if (renderBlocking) {
    console.log(JSON.stringify(renderBlocking, null, 2));
}

console.log('\n--- Main Thread Work Breakdown ---');
const mainThread = metrics['mainthread-work-breakdown']?.details?.items;
if (mainThread) {
    console.log(JSON.stringify(mainThread, null, 2));
}

console.log('\n--- Bootup Time ---');
const bootupTime = metrics['bootup-time']?.details?.items;
if (bootupTime) {
    console.log(JSON.stringify(bootupTime.slice(0, 3), null, 2));
}

console.log('\n--- Offscreen Images (Lazy Load candidates) ---');
const offscreenImages = metrics['offscreen-images']?.details?.items;
if (offscreenImages) {
    console.log(JSON.stringify(offscreenImages, null, 2));
}

console.log('\n--- Uses Responsive Images ---');
const responsiveImages = metrics['uses-responsive-images']?.details?.items;
if (responsiveImages) {
    console.log(JSON.stringify(responsiveImages, null, 2));
}

console.log('\n--- Modern Image Formats (WebP/AVIF) ---');
const modernImages = metrics['uses-webp-images']?.details?.items; // often mapped to this or uses-optimized-images
if (modernImages) {
    console.log(JSON.stringify(modernImages, null, 2));
}

