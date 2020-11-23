'use strict';

const fs = require('fs');
var kle = require("./dist/index");

console.log(process.argv);

let rawdata = fs.readFileSync(process.argv[2]);
let old_kle = JSON.parse(rawdata);

var keyboard = kle.Serial.deserialize(old_kle);


let data = JSON.stringify(keyboard, null, 2);
fs.writeFileSync(process.argv[3], data);
