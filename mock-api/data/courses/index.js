const path = require('path');
const fs = require('fs');

const stringifiedData = fs.readFileSync(path.join(__dirname, 'courses.json'));

module.exports = JSON.parse(stringifiedData);
