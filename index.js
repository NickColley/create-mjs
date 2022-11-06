#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const cwd = fs.realpathSync(process.cwd());
const name = path.basename(cwd);

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

fs.writeFileSync(path.join(cwd, "package.json"), packageFile);
