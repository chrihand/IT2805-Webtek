var menuItem;
var timer;
document.onclick = mouseClose;

function mouseOpen(id) {
	console.log(id)
	if (menuItem) menuItem.style.visibility = "hidden";
	menuItem = document.getElementById(id);
	menuItem.style.visibility = "visible";
}

function mouseClose() {
	timer = window.setTimeout(close, 500);
}

function close() {
	if (menuItem) menuItem.style.visibility = "hidden";
}

function keepSubmenu() {
	window.clearTimeout(timer);
}

