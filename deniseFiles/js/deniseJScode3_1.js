 /*
    #######################################################
    FILENAME: deniseJScode3_1.js
    OVERVIEW: GDI JS Class 3: Loops
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

/*	WHILE LOOPS
	######################################################
	while will repeat the same code over and over until 
	some condition is met.
	#######################################################
*/
//while loop console example
function whileLoopEX() {
	var bottlesOfBeer = 50;
	console.log('This is an example of a while loop');
	while (bottlesOfBeer > 0) {
	  console.log(bottlesOfBeer + ' bottles of beer on the wall');
	  bottlesOfBeer = bottlesOfBeer - 1;
	}
	console.log('\n');	//Breakline
}
//whileLoopEX();

//PRINTING WHILE LOOP TO HTML PAGE
function whileLoopEX2() {
	var bottlesOfBeer = 50;
	document.getElementById("p1").innerHTML=('This is an example of a while loop');
	while (bottlesOfBeer > 0) {
	  document.getElementById("p2").innerHTML += (bottlesOfBeer+ ',\n');
	  bottlesOfBeer = bottlesOfBeer - 1;
	}
}
//whileLoopEX2();

/*	FOR LOOPS
	######################################################
	for loops are very similar, but you declare a counter 
	in the statement.
	#######################################################
*/
// Console example of for loop will count 1 to 10
function forLooopEX(){
	console.log('This is an example of a for loop');
	for (var i = 1; i <= 10; i++) {
		console.log(i);
	}
	console.log('\n'); //Breakline
}
//forLooopEX();

//PRINTING FOR LOOP TO HTML PAGE
function forLooopEX2(){
	document.getElementById("p3").innerHTML=('This is an example of a for loop');
	for (var i = 1; i <= 10; i++) {
		console.log(i);
		document.getElementById("p4").innerHTML += (i+ ',\n');
	}
}
//forLooopEX2();

/*	FOR LOOP LOGIC
	######################################################
	Loops and logic
	You can add other statements or logical operators 
	inside the loops.
	#######################################################
*/
function forLoopsLogic(){
	console.log('Count from 1 to 100');
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0) {
		// Says 'Fizz' after multiples of three
		console.log(' Fizz');
		} else if (i % 5 === 0) {
		// Says 'Buzz' after multiples of five
		console.log(' Buzz');
		} else {
		console.log(i);
		}
	}
	console.log('\n'); //Breakline
}
//forLoopsLogic();

/*	BREAK
	######################################################
	This program illustrates the break statement. It finds 
	the first number that is both greater than or equal to 
	20 and divisible by 7.
	#######################################################
*/
// Console example of for loop break
function breakLoop1(){
	for (let current = 20; ; current = current + 1) {
		if (current % 7 == 0) {
		console.log(current);
		break;
		}
	}		// → 21
}
//breakLoop1();

//PRINTING break TO HTML PAGE
function breakLoop2(){
	for (let current = 20; ; current = current + 1) {
		if (current % 7 == 0) {
		document.getElementById("p5").innerHTML = (current+ '\n');
		break;
		}
	}		// → 21
}
//breakLoop2();

/*	BREAK
	######################################################
	To exit a loop, use the break statement.
	This piece of code will count from 100 to 200 and look 
	for the first number % 7 
	#######################################################
*/
function breakLoop3(){
	console.log('Count from 100 to 200')
	for (var i = 100; i <= 200; i++) {
		console.log('Testing ' + i);
		//Stop at the first multiple of 7
		if (i % 7 == 0) {
		console.log('Found it! ' + i);
		break;
		}
	}
}
//breakLoop3();

/*	
	######################################################
	Let’s Develop It 3.1
	Write a loop that gives you the 9's times table, from 
	9 x 1 = 9 to 9 x 12 = 108.
	Finish early? Try using a loop inside a loop to write 
	all the times tables, from 1 to 12.
	#######################################################
*/
//Console example
function multiplyLoop1(){
	var number1 = 9;
	for(var i = 1; i <= 12; i++ ){
		var mult1 = number1 * i;
		console.log(+number1+ ' * ' +i+ '='  + mult1);
	}
}
//multiplyLoop1();

//Prints to HTML page
function multiplyLoopPrint(){
	var number1 = 9;
	for(var i = 1; i <= 12; i++ ){
		var mult1 = number1 * i;
		document.getElementById("nine").innerHTML += (+number1+ ' * ' +i+ '='  + mult1+ "<br>");
	}
}
//multiplyLoopPrint();

//loop inside a loop to write all the times tables, from 1 to 12.
function multiplyLoop2(){
	for (var multiplier = 0; multiplier <= 12; multiplier++) {
		for (var i = 0; i <= 12; i++) {
		var result = multiplier * i;
		console.log(multiplier + ' * ' + i + ' = ' + result);
		}
	}
}
//multiplyLoop2();

