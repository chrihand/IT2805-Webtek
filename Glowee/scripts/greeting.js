var today = new Date();
var hourNow = today.getHours();
var greeting;

var sourceTxt = document.getElementById("sectionTitle");

if (hourNow >= 18) {
    greeting = "God Kveld, og velkommen til Glowee"
}
else if (hourNow >= 12) {
    greeting = "God ettermiddag, og velkommen til Glowee"
}
else if (hourNow >= 0) {
    greeting = "God morgen, og velkommen til Glowee"
}
else {
    greeting = "Velkommen til Glowee"
}

sourceTxt.innerHTML = greeting;