import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import CleanCSS from 'clean-css';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ensure dist directory exists
const distDir = join(__dirname, 'dist');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Read core tokens
const tokensPath = join(__dirname, '../core/tokens.css');
const tokensCSS = readFileSync(tokensPath, 'utf-8');

// Find all component CSS files
const componentFiles = glob.sync('src/**/*.css', { cwd: __dirname });

// Combine all CSS
let combinedCSS = `/* ajaRed Design System - Combined CSS */\n\n`;
combinedCSS += `/* Design Tokens */\n${tokensCSS}\n\n`;

// Add CSS reset/normalize
combinedCSS += `/* Minimal CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

\n`;

// Add each component's CSS
for (const file of componentFiles) {
  const componentPath = join(__dirname, file);
  const componentCSS = readFileSync(componentPath, 'utf-8');
  const componentName = file.split('/')[1]; // Get component folder name

  combinedCSS += `/* Component: ${componentName} */\n`;
  combinedCSS += componentCSS;
  combinedCSS += '\n\n';
}

// Write unminified version
const outputPath = join(distDir, 'ajared.css');
writeFileSync(outputPath, combinedCSS);
console.log('✓ Built ajared.css');

// Minify and write minified version
const minifier = new CleanCSS({ level: 2 });
const minified = minifier.minify(combinedCSS);

if (minified.errors.length > 0) {
  console.error('CSS minification errors:', minified.errors);
  process.exit(1);
}

const minifiedPath = join(distDir, 'ajared.min.css');
writeFileSync(minifiedPath, minified.styles);
console.log('✓ Built ajared.min.css');

const stats = minified.stats;
console.log(`  Original: ${(stats.originalSize / 1024).toFixed(2)} KB`);
console.log(`  Minified: ${(stats.minifiedSize / 1024).toFixed(2)} KB`);
console.log(`  Saved: ${((1 - stats.efficiency) * 100).toFixed(2)}%`);
