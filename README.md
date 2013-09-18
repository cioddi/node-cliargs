# node-cliargs [![Build Status](https://secure.travis-ci.org/cioddi/node-cliargs.png?branch=master)](http://travis-ci.org/cioddi/node-cliargs)

command line argument parser

## Getting Started
Install the module with: `npm install cliargs`

```javascript
var cliargs = require('cliargs');
var argsObj = cliargs.parse();
```

## example

This argument string

```
 -a -v -bsd -p blub -k asd param1 param2 --foo=bar
```

will be parsed as

```
{ params: [ 'param1', 'param2' ],
  a: true,
  v: true,
  b: true,
  s: true,
  d: true,
  p: 'blub',
  k: 'asd',
  foo: 'bar' }
```

## License
Copyright (c) 2013 Max Tobias Weber  
Licensed under the MIT license.
