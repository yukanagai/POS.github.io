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



// BUTTONS FOR FOOD CATEGORIES

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


// HIDE MENU ITEM LIST BY DEFAULT

breakfastUL.addClass('menuItemsHide').addClass('breakfast');

// Add an event listener to toggle the hidden class
// So the food category becomes visible when the corresponding
// button gets clicked on, and hides when clicked on again. 

breakfastButton.on('click', function() {
	breakfastUL.toggle(function() {
	});
});

// ADD EACH BREAKFAST ITEM TO RECEIPT ON CLICK ....

var receipt = $('.rightColumn .receipt');
var receiptUL = $('<ul>').attr('id', 'receiptUL'); 
receipt.append(receiptUL); 	

// when the breakfast item gets clicked... 
// append the whole thing ($(this)) to the receipt UL

$('.breakfast > li').on('click', function() { 
	$(this).clone().appendTo($('#receiptUL'));
// fires the cal function everytime item gets added to the receipt
	calculate();
});



// THE CALCULATOR

var calculate = function() {

// Grabbing the price from receipt UL - NEED SPACE in between!
// Or else it will concatenate it into one squished string.
	var pricesArray = $("#receiptUL .price"); 

// Creating a new array	
	var calPrice = [];

// Looping through the array.. use eq(i) for jQuery
	for(var i=0; i<pricesArray.length; i++) {
		var prices = parseFloat(pricesArray[i].textContent);
		calPrice.push(prices);
	};
	
// Adding the sum of the entire array to get Total	
// var totalBeforeTax = calPrice.reduce(function(previous, current) {
// return previous + current; }, 0);
	var sumBeforeTotal = 0
	for (var i = 0;i<calPrice.length;i++){
		sumBeforeTotal += calPrice[i];
	};

// TOTAL BEFORE TAX
	$('#totalBeforeTax').val("$ " + sumBeforeTotal);

// NYC SALES TAX (8%)
	var salesTax = sumBeforeTotal * 0.08875;
	var shorthandTax = salesTax.toFixed(2);
	$('#salesTax').val("$ " + shorthandTax);

// TOTAL WITH TAX
	var totalWithTax = totalBeforeTax + shorthandTax;

// FINAL TOTAL WITH TIP OPTIONS
	$('#tip12').on('click', function(event) {
		event.preventDefault();
		var tipTotal = (sumBeforeTotal* 0.12);
		var finalTotal = sumBeforeTotal + tipTotal + salesTax;
		var stringTotal = finalTotal.toFixed(2);
		$('#finalTotal').val("$ " + stringTotal);
	});

	$('#tip15').on('click', function(event) {
		event.preventDefault();
		var tipTotal = (sumBeforeTotal* 0.15);
		var finalTotal = sumBeforeTotal + tipTotal + salesTax;
		var stringTotal = finalTotal.toFixed(2);
		$('#finalTotal').val("$ " + stringTotal);
	});

	$('#tip20').on('click', function(event) {
		event.preventDefault();
		var tipTotal = (sumBeforeTotal* 0.20);
		var finalTotal = sumBeforeTotal + tipTotal + salesTax;
		var stringTotal = finalTotal.toFixed(2);
		$('#finalTotal').val("$ " + stringTotal);
	});

// CLEARING THE ORDER
	// $('#clear').live('click', function(event) {
	// 	event.preventDefault();
	// 	$(this).parent().remove();
	// 	// $('#finalTotal').val("");
	// 	// $('.receipt').val("");
	// });

};


/// TRACKING MULTIPLE ORDERS ....

var saveOrder = $('#saveOrder');	//Save order prompt+button
var multipleOrders = $('.multipleOrders'); 	// HTML BODY
var orderListUL = $('<ul></ul>');

var ordersArray = [];		// empty array

saveOrder.on('click', function(event) {
	event.preventDefault();
	var customerOrderButton = $('<button></button>');
	var customerName = $("#customerName").html();
	customerOrderButton.append(customerName);	// customer's name
	var orderListLI = $('<li></li>');	// creates a new LI for the button
	orderListLI.append(customerOrderButton); // Appends button to the LI + UL
	orderListUL.append(orderListLI);
	multipleOrders.append(orderListUL);
});

console.log(customerName);
	// Create new OBJECT for each new customer's name
// 	var ordersObj = {name: customerName, menuItems: [], price: []};	

// 	ordersArray.push(ordersObj);
// 	console.log(ordersArray);
// });









// SIDES

var sidesButton = $('.menuCategories button:nth-child(2)');
var sidesUL = $('<ul></ul>');

for(var sidesItem in menuItems.sides) {
	var sidesLI = $('<li></li>');
	var sidesName = $('<span class="name"></span>');
	var sidesPrice = $('<span class="price"></span>');

	sidesName.text(menuItems.sides[sidesItem].name);
	sidesPrice.text(menuItems.sides[sidesItem].price);
	sidesLI.append(sidesName).append(sidesPrice);
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
	$(this).clone().appendTo($('#receiptUL'));

	calculate();
}); 



// ENTREES

var entreesButton = $('.menuCategories button:nth-child(3)');
var entreesUL = $('<ul></ul>');

for(var entreesItem in menuItems.entrees) {
	var entreesLI = $('<li></li>');
	var entreesName = $('<span class="name"></span>');
	var entreesPrice = $('<span class="price"></span>');

	entreesName.text(menuItems.entrees[entreesItem].name);
	entreesPrice.text(menuItems.entrees[entreesItem].price);
	entreesLI.append(entreesName).append(entreesPrice);
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
	$(this).clone().appendTo($('#receiptUL'));

	calculate();
}); 


// DESSERT

var dessertButton = $('.menuCategories button:nth-child(4)');
var dessertUL = $('<ul></ul>');

for(var dessertItem in menuItems.dessert) {
	var dessertLI = $('<li></li>');
	var dessertName = $('<span class="name"></span>');
	var dessertPrice = $('<span class="price"></span>');

	dessertName.text(menuItems.dessert[dessertItem].name);
	dessertPrice.text(menuItems.dessert[dessertItem].price);
	dessertLI.append(dessertName).append(dessertPrice);
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
	$(this).clone().appendTo($('#receiptUL'));
	
	calculate();
}); 


// DRINKS

var drinksButton = $('.menuCategories button:nth-child(5)');
var drinksUL = $('<ul></ul>');

for(var drinksItem in menuItems.drinks) {
	var drinksLI = $('<li></li>');
	var drinksName = $('<span class="name"></span>');
	var drinksPrice = $('<span class="price"></span>');

	drinksName.text(menuItems.drinks[drinksItem].name);
	drinksPrice.text(menuItems.drinks[drinksItem].price);
	drinksLI.append(drinksName).append(drinksPrice);
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
	$(this).clone().appendTo($('#receiptUL'));
	
	calculate();
}); 



});