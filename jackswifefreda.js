$(function() {

// LISTING MENU ITEMS

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


// CREATING BUTTONS FOR EACH MENU CATEGORY 

var button = $("<button></button");
var menuCategories = $('.menuCategories')
var ulMenu = $('<ul></ul>');
var liMenu = $('<li></li>');

// For each category in my menu items (obj array), 
// create a new button and append it to each category + the DOM.

for(category in menuItems) {
	var newButton = $('<button>').append(category);
	liMenu.append(newButton);
	ulMenu.append(liMenu);
	menuCategories.append(ulMenu);
};


// LIST MENU ITEMS BY CATEGORY BUTTONS ON THE DOM

// Using the for-in loop, create a new <li> for every item
// Attach each breakfast item to the li + append it to the UL
// Exit loop and attach the ul to the HTML page

var breakfastButton = $('.menuCategories button:nth-child(1)');
var breakfastUL = $('<ul></ul>');

for(var breakfastItem in menuItems.breakfast) {
	var breakfastLI = $('<li></li>');
	breakfastLI.text(menuItems.breakfast[breakfastItem].name + ": $" + menuItems.breakfast[breakfastItem].price);
	breakfastUL.append(breakfastLI);
};
	menuCategories.append(breakfastUL);

// HIDING BREAKFAST LIST BY ADDING CLASS
breakfastUL.addClass('menuItemsHide').addClass('breakfast');

// TOGGLE TO HIDE BREAKFAST LIST ON CLICK
breakfastButton.on('click', function() {
	breakfastUL.toggle(function() {
	});
});

// ADD EACH BREAKFAST ITEM TO RECEIPT ON CLICK....

// Appending a new UL with an ID #receiptUL to the receipt
// Which is where the new receipt items will get stored

var receipt = $('.receipt');
receipt.append($('<ul>')).attr('id', 'receiptUL'); 	
var eachBreakfastItem = $('.menuItems > li');

// Adding an event listener to individual LIs 
// Creating a new <Receipt LI>  after each new click
// Adding "$(this)" (which grabs whatever LI item was just clicked on)
// to the Receipt LI tag and appending it to my receipt UL.

$('.breakfast > li').on('click', function() { 
	var receiptLI = $('<li></li>');
	receiptLI.text($(this).html()); // using this returns itself...this grabs the element so that you can use it to do something to it
	$('#receiptUL').append(receiptLI);
}); 







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



});