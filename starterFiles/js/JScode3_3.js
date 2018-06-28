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


function myObject() {
	var recipe = {
		recipeTitle: 'Chocolate-Dipped Strawberries',
		servings: ['2', '1/2', '1'],
		ingredients: ['cups strawberries', 'cup chocolate chips', 'teaspoon vegetable oil'],
		directions: ['Gently rinse strawberries and dry on paper towels (berries must be completely dry). Line cookie sheet with waxed paper.',
			'In 1-quart saucepan, melt chocolate chips and shortening over low heat, stirring frequently. Remove from heat.',
			'Dip lower half of each strawberry into chocolate mixture; allow excess to drip back into saucepan. Place on waxed paper-lined tray or cookie sheet.',
			'Refrigerate uncovered about 30 minutes or until chocolate is firm, or until ready to serve. Store covered in refrigerator so chocolate does not soften (if made with oil, chocolate will soften more quickly at room temperature).'],
		greeting: function () {
			console.log('Hello!');
		},
		prepare: function (food) {
			console.log("I'm hungery! Let's cook..." + food);
		}
	};
	recipe.greeting();
	var title = recipe.recipeTitle;
	//console.log('RECIPE ' + title);
	recipe.prepare(title);

	console.log('INGREDIENTS');
	var item1 = recipe.servings[0] + ' ' + recipe.ingredients[0];

	for (each in recipe.servings) {
		console.log(recipe.servings[each] + " " + recipe.ingredients[each] + "\n");
	}

	console.log('STEPS');
	for (var i = 0; i < recipe.directions.length; i++) {
		var counter = i + 1;
		var directions = recipe.directions[i];
		console.log(counter + '. ' + directions);
	}
}
myObject();

//Example of printing an object 
function myObject2() {
	var txt = "";
	var nyc = {
		fullName: ["New York City", "USA"],
		mayor: ["Michael Bloomberg", "Meow"],
		population: ["8000000", "2000"],
		boroughs: ["5", "7"]
	};

	for (var x in nyc) {
		txt += nyc[x];
		console.log(nyc[x]);
	}
}
