const fs = require('fs');
const path = require('path');

function copyHTML(src, dest) {
    fs.readdirSync(src).forEach(file => {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);

        if (fs.statSync(srcFile).isDirectory()) {
            fs.mkdirSync(destFile, { recursive: true });
            copyHTML(srcFile, destFile);
        } else if (file.endsWith('.html')) {
            fs.copyFileSync(srcFile, destFile);
        }
    });
}

copyHTML(path.join(__dirname, 'src/pages'), path.join(__dirname, 'docs'));
