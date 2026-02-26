import fs from 'fs';

const data = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

const scores = {
    performance: data.categories.performance.score * 100,
    accessibility: data.categories.accessibility.score * 100,
    bestPractices: data.categories['best-practices'].score * 100,
    seo: data.categories.seo.score * 100
};

console.log('--- Lighthouse Scores ---');
console.log(`Performance: ${scores.performance}`);
console.log(`Accessibility: ${scores.accessibility}`);
console.log(`Best Practices: ${scores.bestPractices}`);
console.log(`SEO: ${scores.seo}`);

const overall = (scores.performance + scores.accessibility + scores.bestPractices + scores.seo) / 4;
console.log(`Overall Score: ${(overall / 10).toFixed(1)}/10`);

const metrics = data.audits;
console.log('\n--- Key Metrics ---');
console.log(`First Contentful Paint: ${metrics['first-contentful-paint'].displayValue}`);
console.log(`Largest Contentful Paint: ${metrics['largest-contentful-paint'].displayValue}`);
console.log(`Total Blocking Time: ${metrics['total-blocking-time'].displayValue}`);
console.log(`Cumulative Layout Shift: ${metrics['cumulative-layout-shift'].displayValue}`);
console.log(`Speed Index: ${metrics['speed-index'].displayValue}`);

console.log('\n--- Top Opportunities ---');
const opportunities = Object.values(metrics).filter(m => m.details && m.details.type === 'opportunity' && m.overallSavingsMs > 0).sort((a, b) => b.overallSavingsMs - a.overallSavingsMs).slice(0, 3);
opportunities.forEach(opp => {
    console.log(`- ${opp.title}: Save ${opp.overallSavingsMs}ms`);
});
