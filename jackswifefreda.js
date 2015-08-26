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
		{name: "Poached Eggs with Grilled Tomato and Haloumi", price: 12},
		{name: "jack's breakfast", price: 19},
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

	sandwiches: [
		{name: "Jack's Burger", price: 13},
		{name: "Prego Roll", price: 14},
		{name: "Chicken Prego", price: 13},
		{name: "Grilled Eggplant Baguette", price: 10},
		{name: "Classic Egg Salad Sandwich", price: 9},
		{name: "Mashed Avocado on Seeded Bread", price: 11}
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
}

// ADDS BUTTONS FOR EACH MENU CATEGORY 

var button = $("<button></button");
var menuCategories = $('.menuCategories')
var ulMenu = $('<ul></ul>');
var liMenu = $('<li></li>');


for(category in menuItems) {
	var newButton = $('<button>').append(category);
	liMenu.append(newButton);
	ulMenu.append(liMenu);
	menuCategories.append(ulMenu);
};

// WHEN YOU CLICK BREAKFAST....ITEMS + PRICES SHOW

$('.menuCategories button:nth-child(1)').on('click', function() { 



});


});