#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const name = path.basename(__dirname);

const packageFile = `{
  "private": true,
  "type": "module",
  "name": "${name}",
  "description": "",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "license": "MIT"
}`;

const cwd = fs.realpathSync(process.cwd());
fs.writeFileSync(path.join(cwd, "package.json"), packageFile);
