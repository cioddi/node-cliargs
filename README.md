# args [![Build Status](https://secure.travis-ci.org/cioddi/node-args.png?branch=master)](http://travis-ci.org/cioddi/node-args)

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
-a -v -bsd -p blub -k asd param1 param2
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
  k: 'asd' }
```

## License
Copyright (c) 2013 Max Tobias Weber  
Licensed under the MIT license.
