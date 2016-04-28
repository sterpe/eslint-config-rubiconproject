#!/usr/bin/env node

var devDependencies = require('../package').devDependencies;
var child_process = require('child_process'); // eslint-disable-line camelcase
var path = require('path');
var cwd = process.cwd();
var L = [];

for (var key in devDependencies) {
    if (devDependencies.hasOwnProperty(key)) {
        L.push([key, devDependencies[key]].join('@'));
    }
}

while (cwd.indexOf('node_modules') !== -1) {
    cwd = path.dirname(cwd);
}
if (L.length > 0) {
    L = ['install', '--save-dev'].concat(L);
    var error = child_process // eslint-disable-line camelcase
        .spawnSync('npm', L, {
            stdio: 'inherit',
            cwd: cwd
        }).error;
    if (error) {
        process.exit(1);
    }
}
