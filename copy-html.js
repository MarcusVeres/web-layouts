const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

function copyFiles(dir) {
    fse.copy(`./src/${dir}`, `./docs/${dir}`, function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully copied the ${dir} directory`);
        }
    });
}

copyFiles('pages');
copyFiles('assets');
