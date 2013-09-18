#!/usr/bin/env node
'use strict';

var args = require('../lib/cliargs.js');

console.log(JSON.stringify(args.parse()));