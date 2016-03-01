// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (Array.isArray(obj)) {
  	var json = [];

  	for (var i = 0; i < obj.length; i++) {
  		json.push(stringifyJSON(obj[i]));
  	}

  	return '[' + json.join(',') + ']';
  }

  if( obj !== null && typeof obj ==='object') {
  	var json = [];
  	for(var i in obj) {
  		if (obj[i] === undefined || typeof obj[i] === 'function') {
  			continue;
  		}
  		json.push(stringifyJSON(i) + ':' + stringifyJSON(obj[i]));
  	}
  	return '{' + json.join(',') + '}';
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  return ''+obj;
};
