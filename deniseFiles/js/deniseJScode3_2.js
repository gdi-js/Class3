 /*
    #######################################################
    FILENAME: deniseJScode3_2.js
    OVERVIEW: GDI JS Class 3: Arrays
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

/*	
	######################################################
	Arrays are ordered lists of values.
	You can put different types of data into an array.
	EXAMPLE OF AN ARRAY
	var arrayName = [value0, value1];
	#######################################################
*/
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green','Blue', 'Indigo', 'Violet'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];
var myFavoriteThings = ['Cats', 6, 'Coding'];

function arrayEX(){
	console.log(rainbowColors.length);		//Console example
	document.getElementById('p1').innerHTML = (rainbowColors.length);  //Prints to HTML

	//Access an array item
	var firstColor = rainbowColors[0];
	var lastColor  = rainbowColors[6];
	console.log(firstColor);
	console.log(lastColor);
	document.getElementById('p2').innerHTML = (firstColor);  //Prints to HTML
	document.getElementById('p3').innerHTML = (lastColor);  //Prints to HTML

	//console.log(lotteryNumbers.length);

	document.getElementById('p4').innerHTML = (myFavoriteThings[0]);  //Prints to HTML
	myFavoriteThings[0] = 'Kittens'; //Changing value in array
	console.log(myFavoriteThings[0]);
	document.getElementById('p5').innerHTML = (myFavoriteThings[0]);  //Prints to HTML

	myFavoriteThings.push('Javascript');
	console.log(myFavoriteThings[3]);
	document.getElementById('p6').innerHTML = (myFavoriteThings[3]);  //Prints to HTML

}
//arrayEX();

/*	
	######################################################
	Let’s Develop It 3.2
	Create an array of your favorite foods. 
	Print a few values onto your screen.
	#######################################################
*/
var favFoods = ['Bannans', 'Apples', 'Strawberries'];
function favoriteFoods(){
	console.log(favFoods[0]);
	console.log(favFoods[2]);
	document.getElementById('p7').innerHTML = (favFoods[0]);  //Prints to HTML
	document.getElementById('p8').innerHTML = (favFoods[1]);  //Prints to HTML
	document.getElementById('p9').innerHTML = (favFoods[2]);  //Prints to HTML
}
//favoriteFoods();

/*	
	######################################################
	Use a for loop to easily work with each item in an 
	array.
	#######################################################
*/
function printAllinArray(){
	for(var i=0; i < rainbowColors.length; i++){
		console.log(rainbowColors[i]);
	}
}
//printAllinArray();

/*
	######################################################
	Print a few values onto your screen.
	######################################################
*/
function printFavoriteFoods(){
	var favFoods = ['Bannans', 'Apples', 'Strawberries'];
	for(var i=0; i < favFoods.length; i++){
		document.getElementById('p10').innerHTML += (favFoods[i]+ '<br>');  //Prints to HTML
	}
}
//printFavoriteFoods();