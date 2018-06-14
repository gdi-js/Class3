 /*
    #######################################################
    FILENAME: deniseJScode3_3.js
    OVERVIEW: GDI JS Class 3: Objects
    PURPOSE: Different Let's Develop It outline for students
    #######################################################
*/

/*	
	######################################################
	Objects let us store a collection of properties.
	var objectName = {
		propertyName: propertyValue,
		propertyName: propertyValue
	};
	#######################################################
*/
function objectEX(){
	//FILL OUT THE USER OBJECT
	var user = {
		hometown: '',
		hair: '',
		likes: ['', ''],
		birthday: {month: , day: }
	  };
	  
	  //Accessing Objects 
	  var usersHometown = user.hometown;
	  console.log(usersHometown);
	  //FILL OUT: PRINT usersHometown TO THE HTML PAGE
	  
	  //FILL OUT: ACESS THE hair object
	  var usersHair = ;
	  //FILL OUT: CONSOLE PRINT AND PRINT TO THE HTML 

	  //Accessing an object that contains another object insdie it
	  var userBirthday = user.birthday.month + "/" + user.birthday.day;
	  console.log(userBirthday);
	  //FILL OUT: P TAG TO PRINT TO HTML PAGE
	  document.getElementById("").innerHTML=(userBirthday);

	  //Add new properties
	  user.married = ;
	  var usersStatus = user.married;
	  console.log(usersStatus);
	  //FILL OUT: TEXT TO PRINT AND usersStatus
	  document.getElementById("p4").innerHTML=();
}

/*	
	######################################################
					Let’s Develop It 3.3
	Create an object to hold information on your favorite 
	recipe. It should have properties for:
		recipeTitle (a string)
		servings (a number)
		ingredients (an array of strings)
		directions (a string)
	Try displaying some information about your recipe.
	Bonus: Create a loop to list all the ingredients.
	#######################################################
*/

function  myObject(){

}

//Example of printing an object 
function myObject2(){
	var txt="";
	var nyc = {
		fullName: ["New York City","USA"],
		mayor: ["Michael Bloomberg","Meow"],
		population: ["8000000","2000"],
		boroughs: ["5","7"]
	};
	
	for (var x in nyc){
		txt += nyc[x];
		console.log(nyc[x]);
	}
}
