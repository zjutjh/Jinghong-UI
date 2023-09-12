const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const distPath = path.resolve(__dirname, '..', 'packages', 'components', 'dist');
const targetPath = path.resolve(__dirname, '..', 'packages', 'jinghong-ui', 'lib');



exec('pnpm run build:components', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.log(stderr);
});

fse.copySync(distPath, targetPath);

exec('cd ../packages/jinghong-ui && pnpm publish --access public', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.log(stderr);
}
);
