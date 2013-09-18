/*
 * args
 * https://github.com/cioddi/node-args
 *
 * Copyright (c) 2013 Max Tobias Weber
 * Licensed under the MIT license.
 */

'use strict';

exports.parse = function() {
	var args = process.argv.slice(2);

	var args_obj = {
		params:[]
	};
	for (var i = 0; i < args.length; i++) {
		var done = false;

		if(args[i].substr(0,1) === '-'
			&& args[i].length > 2){


			if(args[i].substr(1,1) !== '-'){

				// list of options -avb

				var tmp_argstr = args[i].substr(1);

				for (var k = 0; k < tmp_argstr.length; k++) {
					args_obj[tmp_argstr[k]] = true;
				};
				done = true;
			}else if(args[i].substr(1,1) === '-'){
				if(args[i].indexOf('=') > 2){

					// value flag --flag=value

					var tmp_argstr = args[i].substr(2);
					tmp_argstr = tmp_argstr.split('=');
					args_obj[tmp_argstr[0]] = tmp_argstr[1];
					done = true;
				}else{

					// flag --flag

					var tmp_argstr = args[i].substr(2);
					args_obj[tmp_argstr] = true;
					done = true;
				}

			}
		}

		if(args[i].substr(0,1) === '-' 
			&& typeof args[(i+1)] !== 'undefined'
			&& args[(i+1)].substr(0,1) !== '-'
			&& args[i].length === 2){

			// -o value

			args_obj[args[i].substr(1,1)] = args[(i+1)];
			i++;
			done = true;
		}else if(args[i].substr(0,1) === '-'
			&& args[i].length === 2){
			// -o

			args_obj[args[i].substr(1,1)] = true;
			done = true;
		}
		if(!done){
			args_obj.params.push(args[i]);
		}
	};

	return args_obj
};
