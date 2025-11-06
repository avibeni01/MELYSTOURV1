const fs = require('fs');
const path = require('path');

const appDir = 'src/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory() && !item.name.startsWith('_') && !item.name.startsWith('.')) {
      findPages(fullPath);
    } else if (item.name === 'page.tsx') {
      const route = dir.replace(appDir, '').replace(/\\/g, '/') || '/';
      const content = fs.readFileSync(fullPath, 'utf-8');

      const hasMetadata = content.includes('export const metadata');
      const hasStructuredData = content.includes('JSON-LD') || content.includes('buildBreadcrumbSchema') || content.includes('buildOrganizationSchema');
      let hasH1 = content.match(/<h1[^>]*>/i) || content.match(/className="[^"]*text-[345]xl[^"]*font-bold/);
      const hasBreadcrumbs = content.includes('Breadcrumbs') || content.includes('<Breadcrumbs');

      // Check imported components for H1
      if (!hasH1) {
        const imports = content.match(/import\s+\w+\s+from\s+['"]@\/components\/[^'"]+['"]/g);
        if (imports) {
          for (const imp of imports) {
            const match = imp.match(/['"]([^'"]+)['"]/);
            if (match) {
              const componentPath = match[1].replace('@/', 'src/');
              const compFile = `${componentPath}.tsx`;
              try {
                if (fs.existsSync(compFile)) {
                  const compContent = fs.readFileSync(compFile, 'utf-8');
                  if (compContent.match(/<h1[^>]*>/i) || compContent.match(/className="[^"]*text-[345]xl[^"]*font-bold/)) {
                    hasH1 = true;
                    break;
                  }
                }
              } catch (e) {
                // Ignore
              }
            }
          }
        }
      }

      pages.push({
        route,
        file: fullPath.replace(/\\/g, '/'),
        hasMetadata,
        hasStructuredData,
        hasH1: !!hasH1,
        hasBreadcrumbs
      });
    }
  }
}

findPages(appDir);

console.log('=== AUDIT SEO COMPLET ===\n');
console.log(`Pages analysées: ${pages.length}\n`);

let score = 0;
let maxScore = pages.length * 4; // 4 points par page

pages.forEach(page => {
  console.log(`Route: ${page.route}`);
  console.log(`  Metadata: ${page.hasMetadata ? '✅' : '❌'}`);
  console.log(`  Structured Data: ${page.hasStructuredData ? '✅' : '❌'}`);
  console.log(`  H1 présent: ${page.hasH1 ? '✅' : '❌'}`);
  console.log(`  Breadcrumbs: ${page.hasBreadcrumbs ? '✅' : '❌'}`);

  if (page.hasMetadata) score++;
  if (page.hasStructuredData) score++;
  if (page.hasH1) score++;
  if (page.hasBreadcrumbs) score++;

  console.log('');
});

const percentage = Math.round((score / maxScore) * 100);
console.log(`\nSCORE GLOBAL: ${score}/${maxScore} (${percentage}%)`);

// Résumé
const metadataCount = pages.filter(p => p.hasMetadata).length;
const structuredDataCount = pages.filter(p => p.hasStructuredData).length;
const h1Count = pages.filter(p => p.hasH1).length;
const breadcrumbsCount = pages.filter(p => p.hasBreadcrumbs).length;

console.log('\n=== RÉSUMÉ ===');
console.log(`✅ Pages avec metadata: ${metadataCount}/${pages.length}`);
console.log(`✅ Pages avec structured data: ${structuredDataCount}/${pages.length}`);
console.log(`✅ Pages avec H1: ${h1Count}/${pages.length}`);
console.log(`✅ Pages avec breadcrumbs: ${breadcrumbsCount}/${pages.length}`);
