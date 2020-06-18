const fs = require('fs');
const path = require('path');
const data = require('./data');

const stringifiedData = JSON.stringify(data);
const filepath = path.join(__dirname, 'db.json');

fs.writeFileSync(filepath, stringifiedData);
console.log('JSON DB created.');
