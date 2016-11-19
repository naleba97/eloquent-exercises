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

var arr = [55, "ape", 4];
console.log(arr.indexOf("ape"));
