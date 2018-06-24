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
	console.log('Returns the length of rainbowColors Array');
	console.log(rainbowColors.length);		//Console example
	console.log('Returns the length of lotteryNumbers Array');
	console.log(lotteryNumbers.length);

	document.getElementById('p1').innerHTML = (rainbowColors.length);  //Prints to HTML

	//Access an array item
	var firstColor = rainbowColors[0];
	console.log('First value in rainbowColors Array');
	console.log(firstColor);

	var lastColor  = rainbowColors[6];
	console.log('Last value in rainbowColors Array');
	console.log(lastColor);
	
	//document.getElementById('p2').innerHTML = (firstColor);  //Prints to HTML
	//document.getElementById('p3').innerHTML = (lastColor);  //Prints to HTML

	document.getElementById('p4').innerHTML = (myFavoriteThings[0]);  //Prints to HTML
	myFavoriteThings[0] = 'Kittens'; //Changing value in array
	//console.log(myFavoriteThings[0]);
	document.getElementById('p4').innerHTML = (myFavoriteThings[0]);  //Prints to HTML

	//Prints array before pushing a new item
	console.log(myFavoriteThings);
	myFavoriteThings.push('Javascript');	
	//Prints array after pushing a new item
	console.log(myFavoriteThings);

	//console.log(myFavoriteThings[3]);
	//document.getElementById('p6').innerHTML = (myFavoriteThings[3]);  //Prints to HTML

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
	document.getElementById('p9').innerHTML = (favFoods);  //Prints to HTML
}
//favoriteFoods();

/*	
	######################################################
	Use a for loop to easily work with each item in an 
	array.
	#######################################################
*/
function printAllinArray(){
	console.log(rainbowColors);
	for(var i=0; i < rainbowColors.length; i++){
		if(rainbowColors[i] === 'Orange'){
			console.log('I found the color!');
			break;
		}
		else{
			console.log('This is not found');
		}
	}
}
//printAllinArray();

/*
	######################################################
	Print a few values onto your screen.
	######################################################
*/
function printFavoriteFoods(){
	var favFoods = ['Bananans', 'Apples', 'Strawberries'];
	for(var i=0; i < favFoods.length; i++){
		document.getElementById('p10').innerHTML += (favFoods[i]+ '<br>');  //Prints to HTML
	}
}
printFavoriteFoods();