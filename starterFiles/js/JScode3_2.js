 /*
    #######################################################
    FILENAME: deniseJScode3_2.js
    OVERVIEW: GDI JS Class 3: Arrays
    PURPOSE: Different Let's Develop It outline for students
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
	//FILL OUT: Prints to HTML

	//Access an array item
	var firstColor = rainbowColors[0];
	//FILL OUT: Access the last element in the rainbow array
	console.log(firstColor);
	//FILL OUT: Console to display the last element in the rainbow array
	//Prints to HTML the first and last color
	
	console.log(lotteryNumbers.length);

	//This prints the first element in the myFavoriteThings array
	document.getElementById('p4').innerHTML = (myFavoriteThings[0]);  //Prints to HTML
	//FILL OUT: Changing value in myFavoriteThings array

	//Console to display the changed element
	//Then print to HTML page

	//Push an element into myFavoriteThings array
	//Console to display the last element
	//Then print to HTML page the last element of myFavoriteThings array that was pushed in
}

/*	
	######################################################
					Let’s Develop It 3.2
	Create an array of your favorite foods. 
	Print a few values onto your screen.
	#######################################################
*/
function favoriteFoods(){

}

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

/*
	######################################################
	Print a few values onto your screen.
	######################################################
*/
function printFavoriteFoods(){

}
