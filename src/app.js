/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [fileForCopy, copyTo] = process.argv.slice(2);

function copyFile(source, newPath) {
  const regularExpression = /^[/-]/;
  const argsIsInvalid =
    regularExpression.test(source) || regularExpression.test(newPath);
  const argsDontExist = !source || !newPath;

  if (source === newPath) {
    return;
  }

  if (argsIsInvalid || argsDontExist) {
    console.error('Invalid arguments');

    return;
  }

  fs.readFile(source, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(newPath, data, (error) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });
}

copyFile(fileForCopy, copyTo);
