var menuItem;
var timer;
document.onclick = mouseClose;

// Opens mouse over menu
function mouseOpen(id) {
	console.log(id)
	if (menuItem) menuItem.style.visibility = "hidden";
	menuItem = document.getElementById(id);
	menuItem.style.visibility = "visible";
}

// Closes the mouse over menu after 500 ms
function mouseClose() {
	timer = window.setTimeout(close, 500);
}

// Closes the mouse over menu
function close() {
	if (menuItem) menuItem.style.visibility = "hidden";
}

// Keeps the menu open
function keepSubmenu() {
	window.clearTimeout(timer);
}

