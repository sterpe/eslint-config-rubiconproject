#!/usr/bin/env node

var peerDependencies = require('../package').peerDependencies;
var child_process = require('child_process'); // eslint-disable-line camelcase
var L = [];

for (var key in peerDependencies) {
    if (peerDependencies.hasOwnProperty(key)) {
        L.push([key, peerDependencies[key]].join('@'));
    }
}

if (L.length > 0) {
    L = ['install', '--save-dev'].concat(L);
    var error = child_process // eslint-disable-line camelcase
        .spawnSync('npm', L, { stdio: 'inherit' }).error;
    if (error) {
        process.exit(1);
    }
}
