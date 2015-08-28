$(function() {

// MENU ITEMS

var menuItems = {
	breakfast: [
		{name: "Soft Boiled Eggs with Sliders", price: 7},
		{name: "Grapefruit and Yogurt", price: 8},
		{name: "Rosewater Waffle", price: 10},
		{name: "Madame Freda", price: 13},
		{name: "Green Shakshuka", price: 12},
		{name: "Mediterranean Breakfast", price: 13},
		{name: "Poached Eggs with Tomato", price: 12},
		{name: "Jack's Breakfast", price: 19},
		{name: "Toasted Baguette", price: 5}
	],

	sides: [
		{name: "Couscous", price: 6},
		{name: "French Fries", price: 6},
		{name: "Chopped Salad", price: 6},
		{name: "Arugula Salad", price: 6}
	],

	salads:[
		{name: "Greek Salad", price: 12},
		{name: "Tuna Salad", price: 14}
	],

	entrees: [
		{name: "Chicken Kebab", price: 13},
		{name: "Fish a la Plancha", price: 17},
		{name: "Mustard Seed Crusted Tofu", price: 13},
		{name: "Freda's Matzo Ball Soup", price: 7}
	],

	dessert: [
		{name: "Flourless Chipotle Chocolate Cake", price: 7},
		{name: "Baked Fruit Crips", price: 7},
		{name: "Homemade Spiced Cheesecake", price: 7},
		{name: "Malva Pudding", price: 7}
	],

	drinks: [
		{name: "Mint Lemonade", price: 5},
		{name: "Fresh Cantaloupe Juice", price: 5},
		{name: "Bottomless Drip Coffee", price: 3},
		{name: "Espresso", price: 3},
		{name: "Au Lait", price: 3.5},
		{name: "Latte", price: 4},
		{name: "Cappucino", price: 4},
		{name: "Cold Brew", price: 3.5},
		{name: "Nana Tea", price: 4}
	]
};



// CREATING MENU BUTTONS FOR ALL FOOD CATEGORIES

var button = $("<button></button");
var menuCategories = $('.menuCategories')
var ulMenu = $('<ul></ul>');
var liMenu = $('<li></li>');

// Using a for-in loop, create a new button for each 
// food category in my menu and append to the menu's li>ul>body 

for(category in menuItems) {
	var newButton = $('<button>').append(category);
	liMenu.append(newButton);
	ulMenu.append(liMenu);
	menuCategories.append(ulMenu);
};


// CREATE LISTS FOR EVERY MENU CATEGORY 

// Using the for-in loop, create a new <li> for every menu item 
// grouped by it's food category. 
// Attach each item to the category's li > ul > body.

var breakfastButton = $('.menuCategories button:nth-child(1)');
var breakfastUL = $('<ul>');

for(var breakfastItem in menuItems.breakfast) {	
	var breakfastLI = $('<li>');
	var breakfastName = $('<span class="name">');
	var breakfastPrice = $('<span class="price">');

	breakfastName.text(menuItems.breakfast[breakfastItem].name);
	breakfastPrice.text(menuItems.breakfast[breakfastItem].price);
	breakfastLI.append(breakfastName).append(breakfastPrice);
	breakfastUL.append(breakfastLI);
};
	menuCategories.append(breakfastUL);


// CREATE A DEFAULT STATE TO HIDE THE CATEGORY LIST

breakfastUL.addClass('menuItemsHide').addClass('breakfast');

// Add an event listener to toggle the hidden class
// So the food category becomes visible when the corresponding
// button gets clicked on, and hides when clicked on again. 

breakfastButton.on('click', function() {
	breakfastUL.toggle(function() {
	});
});

// ADD EACH BREAKFAST ITEM TO RECEIPT WHEN CLICKED ....

var receipt = $('.receipt');
var receiptUL = $('<ul>').attr('id', 'receiptUL'); 
receipt.append(receiptUL); 	

// when the breakfast item gets clicked... 
// append the whole thing ($(this)) to the receipt UL

$('.breakfast > li').on('click', function() { 
	$(this).clone().appendTo($('#receiptUL'));
	calculate();	// fires the cal function everytime item gets added to the receipt
});


// THE CALCULATOR

function calculate() {

// Grabbing the price from receipt UL - NEED SPACE in between!
// Or else it will concatenate it into one squished string.
	var pricesArray = $("#receiptUL .price"); 

// Creating a new array	
	var calPrice = [];
	// console.log("array length: ", pricesArray.length); 

	// Looping through the array.. use eq(i) for jQuery
	for(var i=0; i<pricesArray.length; i++) {
		var prices = parseInt(pricesArray.eq(i).text());
	calPrice.push(prices);
		
	var sum = calPrice.reduce(function(pv, cv) { 
	return pv + cv; }, 0);


};
console.log(calPrice);
console.log(sum);

};






// SIDES

var sidesButton = $('.menuCategories button:nth-child(2)');
var sidesUL = $('<ul></ul>')
for(var sidesItem in menuItems.sides) {
	var sidesLI = $('<li></li>');
	sidesLI.text(menuItems.sides[sidesItem].name + ": $" + menuItems.sides[sidesItem].price)
	sidesUL.append(sidesLI);
};
menuCategories.append(sidesUL);

sidesUL.addClass('menuItemsHide').addClass('sides');

sidesButton.on('click', function() {
	sidesUL.toggle(function() {
	});
});

// ADDING SIDES TO RECEIPT

$('.sides > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 



// SALDADS 

var saladsButton = $('.menuCategories button:nth-child(3)');
var saladsUL = $('<ul></ul>');

for(var saladsItem in menuItems.salads) {
	var saladsLI = $('<li></li>');
	saladsLI.text(menuItems.salads[saladsItem].name + ": $" + menuItems.salads[saladsItem].price)
	saladsUL.append(saladsLI);
};
menuCategories.append(saladsUL);

saladsUL.addClass('menuItemsHide').addClass('salads');

saladsButton.on('click', function() {
	saladsUL.toggle(function() {
	});
});

// ADDING SALADS TO RECEIPT

$('.salads > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 


// ENTREES

var entreesButton = $('.menuCategories button:nth-child(4)');
var entreesUL = $('<ul></ul>');

for(var entreesItem in menuItems.entrees) {
	var entreesLI = $('<li></li>');
	entreesLI.text(menuItems.entrees[entreesItem].name + ": $" + menuItems.entrees[entreesItem].price)
	entreesUL.append(entreesLI);
};
menuCategories.append(entreesUL);

entreesUL.addClass('menuItemsHide').addClass('entrees');

entreesButton.on('click', function() {
	entreesUL.toggle(function() {
	});
});

// ADDING ENTREES TO RECEIPT

$('.entrees > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 


// DESSERT

var dessertButton = $('.menuCategories button:nth-child(5)');
var dessertUL = $('<ul></ul>');

for(var dessertItem in menuItems.dessert) {
	var dessertLI = $('<li></li>');
	dessertLI.text(menuItems.dessert[dessertItem].name + ": $" + menuItems.dessert[dessertItem].price)
	dessertUL.append(dessertLI);
};
menuCategories.append(dessertUL);

dessertUL.addClass('menuItemsHide').addClass('dessert');

dessertButton.on('click', function() {
	dessertUL.toggle(function() {
	});
});

// ADDING DESSERTS TO RECEIPT

$('.dessert > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 


// DRINKS

var drinksButton = $('.menuCategories button:nth-child(6)');
var drinksUL = $('<ul></ul>');

for(var drinksItem in menuItems.drinks) {
	var drinksLI = $('<li></li>');
	drinksLI.text(menuItems.drinks[drinksItem].name + ": $" + menuItems.drinks[drinksItem].price)
	drinksUL.append(drinksLI);
};
menuCategories.append(drinksUL);

drinksUL.addClass('menuItemsHide').addClass('drinks');

drinksButton.on('click', function() {
	drinksUL.toggle(function() {
	});
});

// ADDING DRINKS TO RECEIPT

$('.drinks > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 






});