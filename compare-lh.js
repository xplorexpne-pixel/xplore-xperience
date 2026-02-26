import fs from 'fs';

const oldData = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
const newData = JSON.parse(fs.readFileSync('lighthouse-report-opt.json', 'utf8'));

const getScore = (data) => ({
    performance: (data.categories.performance.score * 100).toFixed(0),
    accessibility: (data.categories.accessibility.score * 100).toFixed(0),
    bestPractices: (data.categories['best-practices'].score * 100).toFixed(0),
    seo: (data.categories.seo.score * 100).toFixed(0),
});

const getMetrics = (data) => ({
    fcp: data.audits['first-contentful-paint'].displayValue,
    lcp: data.audits['largest-contentful-paint'].displayValue,
    tbt: data.audits['total-blocking-time'].displayValue,
    cls: data.audits['cumulative-layout-shift'].displayValue,
    si: data.audits['speed-index'].displayValue,
});

const oldScores = getScore(oldData);
const newScores = getScore(newData);

const oldMetrics = getMetrics(oldData);
const newMetrics = getMetrics(newData);

console.log('--- SCORE COMPARISON ---');
console.log(`Performance:    ${oldScores.performance} -> ${newScores.performance}`);
console.log(`Accessibility:  ${oldScores.accessibility} -> ${newScores.accessibility}`);
console.log(`Best Practices: ${oldScores.bestPractices} -> ${newScores.bestPractices}`);
console.log(`SEO:            ${oldScores.seo} -> ${newScores.seo}`);

console.log('\n--- METRIC COMPARISON ---');
console.log(`FCP (First Contentful Paint):      ${oldMetrics.fcp} -> ${newMetrics.fcp}`);
console.log(`LCP (Largest Contentful Paint):    ${oldMetrics.lcp} -> ${newMetrics.lcp}`);
console.log(`TBT (Total Blocking Time):         ${oldMetrics.tbt} -> ${newMetrics.tbt}`);
console.log(`Speed Index:                       ${oldMetrics.si} -> ${newMetrics.si}`);
console.log(`CLS (Cumulative Layout Shift):     ${oldMetrics.cls} -> ${newMetrics.cls}`);
