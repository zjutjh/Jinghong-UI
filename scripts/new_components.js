#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function copyFiles(sourceDir, targetDir, componentName) {
  const files = await readdir(sourceDir);

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file.replace('example', componentName));

    if ((await fs.promises.lstat(sourcePath)).isDirectory()) {
      fs.mkdirSync(targetPath);
      await copyFiles(sourcePath, targetPath, componentName);
    } else {
      let content = await readFile(sourcePath, 'utf-8');
      content = content.replace(/example/g, componentName);
      await writeFile(targetPath, content, 'utf-8');
    }
  }
}

async function createComponent(componentName) {
  const sourceDir = path.join(__dirname, '..', 'packages', 'components', 'src', 'example');
  const targetDir = path.join(__dirname, '..', 'packages', 'components', 'src', componentName);

  fs.mkdirSync(targetDir);
  await copyFiles(sourceDir, targetDir, componentName);
}

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

createComponent(componentName);
// console.log(process.argv)
