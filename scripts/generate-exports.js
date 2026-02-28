import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '../dist');

/**
 * Generates index.js files in component directories to enable proper exports.
 * This allows imports like:
 *   - import Button from 'chop-logic-components/atoms/button'
 *   - import { useDebounce } from 'chop-logic-components/hooks/use-debounce'
 */

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getAllComponentDirs(basePath) {
  const dirs = [];

  function traverse(currentPath) {
    if (!fs.existsSync(currentPath)) return;

    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const fullPath = path.join(currentPath, entry.name);
        const indexFile = path.join(fullPath, 'index.js');

        // Try multiple naming conventions to find the component file
        const pascalName = toPascalCase(entry.name);
        const possibleNames = [
          `${pascalName}.js`,
          `${entry.name}.js`, // exact match
          `index.js`, // already has index
        ];

        let componentFile = null;
        for (const name of possibleNames) {
          const filePath = path.join(fullPath, name);
          if (fs.existsSync(filePath)) {
            componentFile = name;
            break;
          }
        }

        // Only create index if it doesn't exist and we found a component file
        if (componentFile && componentFile !== 'index.js' && !fs.existsSync(indexFile)) {
          dirs.push({
            dir: fullPath,
            componentFile,
            componentName: entry.name,
          });
        }

        traverse(fullPath);
      }
    }
  }

  traverse(basePath);
  return dirs;
}

function generateIndexFiles() {
  const componentsPath = path.join(distPath, 'components');
  const hooksPath = path.join(distPath, 'hooks');

  // Generate index files for components (atoms, molecules, organisms)
  if (fs.existsSync(componentsPath)) {
    const componentDirs = getAllComponentDirs(componentsPath);
    for (const { dir, componentFile, componentName } of componentDirs) {
      const indexPath = path.join(dir, 'index.js');
      const pascalName = toPascalCase(componentName);
      const cssFile = path.join(dir, `${pascalName}.css`);
      const hasCss = fs.existsSync(cssFile);

      // Generate export that re-exports the component
      let content = `export { default } from './${componentFile}';\n`;
      content += `export * from './${componentFile}';\n`;

      if (hasCss) {
        content += `import './${pascalName}.css';\n`;
      }

      fs.writeFileSync(indexPath, content, 'utf8');
      console.log(`✓ Generated ${path.relative(distPath, indexPath)}`);
    }
  }

  // Generate index files for hooks
  if (fs.existsSync(hooksPath)) {
    const hookDirs = fs.readdirSync(hooksPath, { withFileTypes: true });

    for (const entry of hookDirs) {
      if (entry.isDirectory() && entry.name.startsWith('use-')) {
        const hookDir = path.join(hooksPath, entry.name);
        const jsFiles = fs
          .readdirSync(hookDir)
          .filter((f) => f.endsWith('.js') && f !== 'index.js');

        if (jsFiles.length > 0) {
          // Use the first .js file (usually the main export)
          const mainFile = jsFiles[0];
          const indexPath = path.join(hookDir, 'index.js');

          const content = `export * from './${mainFile}';\nexport { default } from './${mainFile}';\n`;
          fs.writeFileSync(indexPath, content, 'utf8');
          console.log(`✓ Generated ${path.relative(distPath, indexPath)}`);
        }
      }
    }

    // Generate a root hooks index.js if it doesn't exist
    const hooksIndexPath = path.join(hooksPath, 'index.js');
    if (!fs.existsSync(hooksIndexPath)) {
      const hookDirs = fs
        .readdirSync(hooksPath, { withFileTypes: true })
        .filter((e) => e.isDirectory() && e.name.startsWith('use-'))
        .map((e) => e.name);

      if (hookDirs.length > 0) {
        let content = '';
        for (const hookDir of hookDirs) {
          content += `export * from './${hookDir}/index.js';\n`;
        }
        fs.writeFileSync(hooksIndexPath, content, 'utf8');
        console.log(`✓ Generated ${path.relative(distPath, hooksIndexPath)}`);
      }
    }
  }

  // Generate root index files for enums and utils
  const enumsPath = path.join(distPath, 'enums');
  const utilsPath = path.join(distPath, 'utils');

  if (fs.existsSync(enumsPath)) {
    const enumsIndexPath = path.join(enumsPath, 'index.js');
    if (!fs.existsSync(enumsIndexPath)) {
      const enumFiles = fs.readdirSync(enumsPath).filter((f) => f.endsWith('.js'));

      if (enumFiles.length > 0) {
        let content = '';
        for (const file of enumFiles) {
          content += `export * from './${file}';\n`;
        }
        fs.writeFileSync(enumsIndexPath, content, 'utf8');
        console.log(`✓ Generated ${path.relative(distPath, enumsIndexPath)}`);
      }
    }
  }

  if (fs.existsSync(utilsPath)) {
    const utilsIndexPath = path.join(utilsPath, 'index.js');
    if (!fs.existsSync(utilsIndexPath)) {
      const utilFiles = fs.readdirSync(utilsPath).filter((f) => f.endsWith('.js'));

      if (utilFiles.length > 0) {
        let content = '';
        for (const file of utilFiles) {
          content += `export * from './${file}';\n`;
        }
        fs.writeFileSync(utilsIndexPath, content, 'utf8');
        console.log(`✓ Generated ${path.relative(distPath, utilsIndexPath)}`);
      }
    }
  }

  console.log('\n✓ All export index files generated successfully');
}

try {
  generateIndexFiles();
} catch (error) {
  console.error('Error generating export files:', error);
  process.exit(1);
}
