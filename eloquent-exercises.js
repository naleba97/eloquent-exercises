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
  return array.slice(origLength-1, array.length);
}

console.log(revInPlaceVar(["d","o","g"]));
*/

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
