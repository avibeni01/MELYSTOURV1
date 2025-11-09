const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const hotelsDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  // Skip if already webp
  if (ext === '.webp') {
    console.log(`✓ Already WebP: ${path.basename(filePath)}`);
    return null;
  }

  // Only process image files
  if (!['.jpg', '.jpeg', '.png', '.avif'].includes(ext)) {
    return null;
  }

  const outputPath = filePath.replace(/\.(jpg|jpeg|png|avif)$/i, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✓ Converted: ${path.basename(filePath)} → ${path.basename(outputPath)}`);
    return filePath; // Return original path to delete later
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  const filesToDelete = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await processDirectory(fullPath);
      filesToDelete.push(...subFiles);
    } else if (entry.isFile()) {
      const originalFile = await convertToWebP(fullPath);
      if (originalFile) {
        filesToDelete.push(originalFile);
      }
    }
  }

  return filesToDelete;
}

async function main() {
  console.log('🚀 Starting conversion of hotel images to WebP...\n');

  const filesToDelete = await processDirectory(hotelsDir);

  console.log(`\n📊 Conversion completed: ${filesToDelete.length} images converted`);
  console.log('\n🗑️  Deleting original files...\n');

  for (const file of filesToDelete) {
    try {
      fs.unlinkSync(file);
      console.log(`✓ Deleted: ${path.basename(file)}`);
    } catch (error) {
      console.error(`✗ Error deleting ${file}:`, error.message);
    }
  }

  console.log('\n✅ All done!');
}

main().catch(console.error);
