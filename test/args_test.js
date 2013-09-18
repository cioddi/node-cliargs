#!/usr/bin/env node
'use strict';

var exec = require('child_process').exec;
var args = require('../lib/cliargs.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['cliargs'] = {
  setUp: function(done) {

    done();
  },
  'simple flags': function(test) {
    exec('./test/cli.js -a',function(err,stdout,stderr){
      var argsObj = JSON.parse(stdout);

      test.expect(1);


      test.equal(argsObj.a, true, 'should be true.');
      test.done();
    });
    
  },
  '2 simple flags': function(test) {
    exec('./test/cli.js -a -b',function(err,stdout,stderr){
      console.log(stdout);
      var argsObj = JSON.parse(stdout);

      test.expect(2);


      test.equal(argsObj.a, true, 'should be true.');
      test.equal(argsObj.b, true, 'should be true.');
      test.done();
    });
    
  },
  'multi flags': function(test) {
    exec('./test/cli.js -bvg',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(3);
      test.equal(argsObj.b, true, 'should be true.');
      test.equal(argsObj.v, true, 'should be true.');
      test.equal(argsObj.g, true, 'should be true.');

      test.done();
    });
    
  },
  'value flag': function(test) {
    exec('./test/cli.js -b asd',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(1);
      test.equal(argsObj.b, 'asd', 'should be "asd".');

      test.done();
    });
    
  },
  '--value flag': function(test) {
    exec('./test/cli.js --b=asd',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(1);
      test.equal(argsObj.b, 'asd', 'should be "asd".');

      test.done();
    });
    
  },
  'multi value flags': function(test) {
    exec('./test/cli.js -b asd -c dsa',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(2);
      test.equal(argsObj.b, 'asd', 'should be "asd".');
      test.equal(argsObj.c, 'dsa', 'should be "dsa".');

      test.done();
    });
    
  },
  '--flag': function(test) {
    exec('./test/cli.js --basd',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(1);
      test.equal(argsObj.basd, true, 'should be "asd".');

      test.done();
    });
    
  },
  'mixed stuff': function(test) {
    exec('./test/cli.js -a -v -bsd -p blub -k asd param1 param2',function(err,stdout,stderr){

      var argsObj = JSON.parse(stdout);

      test.expect(9);
      test.equal(argsObj.a, true, 'should be true.');
      test.equal(argsObj.v, true, 'should be true.');
      test.equal(argsObj.b, true, 'should be true.');
      test.equal(argsObj.s, true, 'should be true.');
      test.equal(argsObj.d, true, 'should be true.');

      test.equal(argsObj.p, 'blub', 'should be "blub".');
      test.equal(argsObj.k, 'asd', 'should be "asd".');

      test.equal(argsObj.params[0], 'param1', 'should be "param1".');
      test.equal(argsObj.params[1], 'param2', 'should be "param2".');

      test.done();
    });
    
  }
};