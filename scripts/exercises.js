//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////


var people = [
  {name: 'Tim', location:'atl'},
  {name: 'Doug', location:'Topeka'},
  {name: 'Jeff', location: 'nowhere'},
  {name: 'John', location: 'unknown'}
]

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i]);
  }
};

function log(person) {
  console.log('hello ' + person.name);
};

// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.

function map(arr, mapper) {
  var results = [];

  forEach(arr, function(param) {
    results.push(mapper(param));
  });

  return results;
};


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////



// 3. Write a function called pluck that extracts a list of property names:
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

function pluck(list, propertyName) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
    results.push(list[i][propertyName]);
  }
  return results;
};

// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate([i]) === true) {
    }
    return list[i];
  }
};

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
//=> 2
