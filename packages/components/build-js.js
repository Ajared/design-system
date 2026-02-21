import { build } from 'esbuild';
import { glob } from 'glob';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ensure dist directory exists
const distDir = join(__dirname, 'dist');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Find all component JS files
const componentFiles = glob.sync('src/**/*.js', { cwd: __dirname });

if (componentFiles.length === 0) {
  // No JS files yet, create empty bundle
  const emptyBundle = '// ajaRed Design System - JavaScript Components\n// No components with JavaScript yet\n';
  writeFileSync(join(distDir, 'ajared.js'), emptyBundle);
  writeFileSync(join(distDir, 'ajared.min.js'), emptyBundle);
  console.log('✓ No JS components to bundle (created empty files)');
  process.exit(0);
}

// Create index file that imports all components
const indexPath = join(__dirname, 'src/index.js');
const imports = componentFiles
  .map((file) => {
    const moduleName = file.replace('src/', './').replace('.js', '');
    return `export * from '${moduleName}';`;
  })
  .join('\n');

writeFileSync(indexPath, imports);

// Build unminified bundle
async function buildBundle() {
  try {
    // Unminified build
    await build({
      entryPoints: [indexPath],
      bundle: true,
      format: 'esm',
      outfile: join(distDir, 'ajared.js'),
      sourcemap: true,
      target: ['es2020'],
    });
    console.log('✓ Built ajared.js');

    // Minified build
    await build({
      entryPoints: [indexPath],
      bundle: true,
      format: 'esm',
      minify: true,
      outfile: join(distDir, 'ajared.min.js'),
      sourcemap: true,
      target: ['es2020'],
    });
    console.log('✓ Built ajared.min.js');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildBundle();
