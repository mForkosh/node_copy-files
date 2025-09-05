/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const fileForCopy = process.argv[2];
const copyTo = process.argv[3];

if (process.argv.length < 4) {
  console.error('Must be two arguments');
} else {
  fs.readFile(fileForCopy, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(copyTo, data, (error) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });
}
