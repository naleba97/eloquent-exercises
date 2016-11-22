//ch. 2 chessboard exercise
/*var str = "";
var size = 5;
var row = 0;
for (var i = 1; i <= size; i++){
	  for(var j = 1; j <= size; j++){
			if ((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1))
				str = str + " ";
			else {
				str = str + "#";
			}
		}
		str = str + "\n";
}
console.log(str);
*/

//ch. 3 minimum exercise
/*
function min(val1, val2){
	if(val1 < val2){
		return val1;
	}
	else{
		return val2;
	}
}

console.log(min(0,0));
console.log(min(3.4, 0));
console.log(min("a","B"));
*/

//ch. 3 even/odd recursion exercise
/*
function isEven(num){
	if(Math.abs(num) == 0){
		return true;
	}
	else if (Math.abs(num)==1){
	  return false;
	}
	else {
		return isEven(Math.abs(num)-2);
	}
}

console.log(isEven(-5005));
*/

//ch. 3 countBs and countChar exercise
/*
function countBs(word){
	if(word.length == 0){
		return "Invalid input";
	}
	var numBs = 0;
	for (var i = 0; i < word.length; i++){
		if(word.charAt(i) == "B" || word.charAt(i) == "b"){
			numBs++;
		}
	}
	return numBs;
}

function countChar(word, letter){
	if(word.length == 0){
		return "Invalid input";
	}
	var numLets = 0;
	for (var i = 0; i < word.length; i++){
		if(word.charAt(i) == letter){
			numLets++;
		}
	}
	return numLets;
}

console.log(countBs("Berb"));
console.log(countChar("kaksk", "k"));
*/

//ch. 4 sum of a range exercise
/*
var rangeVar = function range(start, end, step){
  if(start >= end){
    throw "The starting value must be less than the end value."
  }
  var rangeNums = [];
  if(arguments.length < 3){
    step = 1;
  }
  if(step >= 0){
    while (start <= end)
    {
      rangeNums.push(start);
      start+=step;
    }
  }
  else{
    while (start >= end){
      rangeNums.push(start);
      start += step;
    }
  }
  return rangeNums;
}

console.log(rangeVar(1,100));

var sumVar = function sum(range){
  var sumNums = 0;
  var count = 0;
  while (count < range.length){
    sumNums += range[count];
    count++;
  }
  return sumNums;
}

console.log(sumVar(rangeVar(1,100)));
*/

//ch. 4 reversing an array exercise
/*
var revVar = function reverseArray(array){
  var revArr = []
  for(var i = array.length-1; i >= 0; i--){
    revArr.push(array[i]);
  }
  return revArr;
}

console.log(revVar(["A", "B", "C"]));

var revInPlaceVar = function reverseArrayInPlace(array){
  var origLength = array.length;
  for(var i = array.length-2; i>=0; i--){
    array.push(array[i]);
  }
  for(var j = 0; j < origLength-1; j++){
    array.shift();
  }
  return array;
}
var arr = ["d","o","g"];
console.log(revInPlaceVar(arr));
console.log(arr);
/*

//ch. 4 list data structure exercise
/*
var arrToList = function arrayToList(arr){
  var list = {
    value: arr[arr.length-1],
    rest: null
  };
  for(var i = arr.length-2; i>=0; i--){
    list = {
      value: arr[i],
      rest: list
    }
  };
  return list;
}
console.log(arrToList(["1","2","3"]));

var listToArr = function listToArray(list){
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value);
  };
  return arr;
}
console.log(listToArr(arrToList(["1","2","3"])));

var prepend = function prependElement(list, element){
  list = {
    value: element,
    rest: list
  };
  return list;
}
console.log(prepend(arrToList(["2","3"]), "1"));

var nthElementInList = function nthInList(list, index){
  var count = 0;
  for(var node = list; node; node = node.rest){
    if (index == count){
      return node.value;
    }
    count++;
  }
  return undefined;
}
console.log(nthElementInList(arrToList(["1","2","3"]), 2));

var recursiveNth = function recursive(list, index){
  var value;
  if(index != 0){
    value = recursive(list.rest, index-1);
  }
  else{
    value = list.value;
  }
  return value;
}
console.log(recursiveNth(arrToList(["1","2","3","4","5"]), 4));
*/

//ch. 4 deep comparison
/*
var deepComp = function deepEqual(obj1, obj2){
  if(typeof obj1 == "object" && typeof obj2 == "object"
      && obj1 != null && obj2 != null){
    for(var prop in obj1){
      if(obj2[prop]!=undefined){
        if(!deepEqual(obj1[prop], obj2[prop])){
          return false;
        }
      }
      else {
        return false;
      }
    }
  }
  else if(obj1 != obj2){
    return false;
  }
  return true;
}
var prius = {color: {red: "nice", blue: "cool"}, make: 2006};
var pencil = {color: {red: "nice", blue: "brown"}, make: 2006};
console.log(deepComp(prius, pencil));
*/

//ch. 5 flattening exercise
/*
var arrays = [["A","B"],["A","B","C"],["2","3","4","5"]];
console.log(arrays.reduce(function(a, b){
  return a.concat(b);
}));
*/

var ancestry = JSON.parse(require("./ancestry.js"));

//ch. 5 mother-child age difference
/*
var byName = {};
//this call to forEach assigns properties
//to the object "byName" for each person
//in ancestry based on each person's name
//then the person's name has their attributes.
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var motherChildAncestry = ancestry.filter(function(person){
    if(byName[person.mother] != undefined){
      return true;
    }
    else {
      return false;
    }
  });

function averageAgeDiff(array){
  function difference(a, b){
    console.log(a);
    console.log(b);
    console.log("------------------");
    return a + (byName[b.name].born - byName[b.mother].born);
  }
  return array.reduce(difference, 0) / array.length;
}
console.log(averageAgeDiff(motherChildAncestry));
*/
