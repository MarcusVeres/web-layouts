const fs = require("fs");
const path = require("path");

function copyDirectory(src, dest) {
  fs.readdirSync(src).forEach((item) => {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    const stat = fs.statSync(srcItem);

    if (stat.isDirectory()) {
      fs.mkdirSync(destItem, { recursive: true });
      copyDirectory(srcItem, destItem);
    } else {
      fs.copyFileSync(srcItem, destItem);
      console.log(`Copied file: ${srcItem}`);
    }
  });
}

copyDirectory(path.join(__dirname, "src/assets"), path.join(__dirname, "docs"));
copyDirectory(path.join(__dirname, "src/pages"), path.join(__dirname, "docs"));
