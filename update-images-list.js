// Script to automatically update images-list.json
// Run this with: node update-images-list.js
// Requires Node.js and fs module

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const outputFile = path.join(__dirname, 'images-list.json');

try {
    // Read all files from images directory
    const files = fs.readdirSync(imagesDir);
    
    // Filter only image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
    });
    
    // Sort alphabetically
    imageFiles.sort();
    
    // Create JSON structure
    const jsonData = {
        images: imageFiles
    };
    
    // Write to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`✅ Successfully updated images-list.json with ${imageFiles.length} images:`);
    imageFiles.forEach(file => console.log(`   - ${file}`));
    
} catch (error) {
    console.error('❌ Error updating images list:', error.message);
    process.exit(1);
}
