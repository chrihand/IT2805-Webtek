var today = new Date(); //Creates a new date object
var hourNow = today.getHours(); //Gets the time att this moment in hours
var greeting; //Creates an empty variable, to be set later in the program

var sourceTxt = document.getElementById("sectionTitle");

if (hourNow >= 18) {
    greeting = "God Kveld, og velkommen til Glowee"
}
else if (hourNow >= 12) {
    greeting = "God ettermiddag, og velkommen til Glowee"
}
else if (hourNow >= 9) {
    greeting = "God Formiddag, og velkommen til Glowee"
}
else if (hourNow >= 6) {
    greeting = "God morgen, og velkommen til Glowee"
}
else if (hourNow >= 0) {
    greeting = "God natt, og velkommen til Glowee"
}
else {
    greeting = "Velkommen til Glowee"
}

// The code above sets the greeting variable to the given phrase, depending on the time of day.

sourceTxt.innerHTML = greeting;