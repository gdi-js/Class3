 /*
    #######################################################
    FILENAME: deniseJScode3_3.js
    OVERVIEW: GDI JS Class 3: Objects
    PURPOSE: Different Let's Develop It Solutions
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
	var user = {
		hometown: 'San Diego, CA',
		hair: 'Brown',
		likes: ['learning', 'code'],
		birthday: {month: 9, day: 12}
	  };
	  
	  //Accessing Objects 
	  var usersHometown = user.hometown;
	  console.log(usersHometown);
	  document.getElementById("p1").innerHTML=(usersHometown);
	  
	  var usersHair = user['hair'];
	  console.log(usersHair);
	  document.getElementById("p2").innerHTML=(usersHair);

	  //Accessing an object that contains another object insdie it
	  var userBirthday = user.birthday.month + "/" + user.birthday.day;
	  console.log(userBirthday);
	  document.getElementById("p3").innerHTML=(userBirthday);

	  //Add new properties
	  user.married = false;
	  var usersStatus = user.married;
	  console.log(usersStatus);
	  document.getElementById("p4").innerHTML=('This persons marital status is ' +usersStatus);
}
//objectEX();

/*	
	######################################################
	Let’s Develop It 3.3a
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
	var recipe= {
		recipeTitle: 'Chocolate-Dipped Strawberries',
		servings: ['2','1/2','1'],
		ingredients: ['cups strawberries', 'cup chocolate chips', 'teaspoon vegetable oil'],
		directions: ['Gently rinse strawberries and dry on paper towels (berries must be completely dry). Line cookie sheet with waxed paper.',
		'In 1-quart saucepan, melt chocolate chips and shortening over low heat, stirring frequently. Remove from heat.',
		'Dip lower half of each strawberry into chocolate mixture; allow excess to drip back into saucepan. Place on waxed paper-lined tray or cookie sheet.',
		'Refrigerate uncovered about 30 minutes or until chocolate is firm, or until ready to serve. Store covered in refrigerator so chocolate does not soften (if made with oil, chocolate will soften more quickly at room temperature).']
	};
	var title = recipe.recipeTitle;
	console.log(title);
	document.getElementById("title").innerHTML=('Recipe Title: ' +title);

	console.log('INGREDIENTS');
	//var item1 = recipe.servings[0] + ' ' +recipe.ingredients[0];
	//var item2 = recipe.servings[1] + ' ' +recipe.ingredients[1];
	//var item3 = recipe.servings[2] + ' ' +recipe.ingredients[2];
	//console.log(item1);
	//console.log(item2);
	//console.log(item3);

	for (item in recipe.servings) {
		console.log(recipe.servings[item] + " " + recipe.ingredients[item] + "\n");
	}

	console.log('STEPS');
	for(var i=0; i < recipe.directions.length; i++){
		var counter = i+1;
		var directions = recipe.directions[i];
		console.log(counter + '. ' +directions);
	}


}
//myObject();

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
//myObject2();

function letCook(){
	var denise = {
		age: 25,
		hairColor: 'Brown',
		talk: function() {
		  console.log('Hello!');
		},
		eat: function(food) {
		  console.log("I'm hungry! Let's cook.. " + food);
		}
	  };
	  denise.talk();
	  denise.eat('pizza');
}
//letCook();
/*	
	######################################################
	Let’s Develop It 3.3b
	Go back to your recipe object. Add a function called 
	letsCook that says "I'm hungry! Let's cook..." with 
	the name of your recipe title.
	#######################################################
*/	

function  myObject2(){
	var recipe= {
		recipeTitle: 'Chocolate-Dipped Strawberries',
		servings: ['2','1/2','1'],
		ingredients: ['cups strawberries', 'cup chocolate chips', 'teaspoon vegetable oil'],
		directions: ['Gently rinse strawberries and dry on paper towels (berries must be completely dry). Line cookie sheet with waxed paper.',
		'In 1-quart saucepan, melt chocolate chips and shortening over low heat, stirring frequently. Remove from heat.',
		'Dip lower half of each strawberry into chocolate mixture; allow excess to drip back into saucepan. Place on waxed paper-lined tray or cookie sheet.',
		'Refrigerate uncovered about 30 minutes or until chocolate is firm, or until ready to serve. Store covered in refrigerator so chocolate does not soften (if made with oil, chocolate will soften more quickly at room temperature).'],
		talk: function() {
			console.log('Hello!');
		  },
		eat: function(food) {
			console.log("I'm hungry! Let's cook.. " + food);
		  }
		};
		recipe.talk();
		
	var title = recipe.recipeTitle;
	recipe.eat(title);

	console.log('INGREDIENTS');
	for (item in recipe.servings) {
		console.log(recipe.servings[item] + " " + recipe.ingredients[item] + "\n");
	}

	console.log('STEPS');
	for(var i=0; i < recipe.directions.length; i++){
		var counter = i+1;
		var directions = recipe.directions[i];
		console.log(counter + '. ' +directions);
	}
}
myObject2();




/*	
	var newString = ' ';
	for(var i = 0; i < recipe.servings && recipe.ingredients ; i++){
		newString.concat(recipe.servings[i] + " " + recipe.ingredients[i] + "\n");
	}
	document.getElementById('ingredients').innerHTML = recipe.servings + " " +recipe.ingredients.toString();

	
	var newString2 = ' ';
	for(var i = 0; i < recipe.directions ; i++){
		newString2.concat(recipe.directions[i] + '<br>');
	}
	document.getElementById('steps').innerHTML = recipe.directions.toString();
	//document.getElementById("steps").innerHTML=(counter + '. ' +directions);
	*/