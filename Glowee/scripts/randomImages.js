var mySlideShow = document.getElementById("slideShow");
var imageArray = ["images/GloweeAccessories.png", "images/GloweeSticks.png", "images/GloweeGlasses.png", "images/GloweeHat.png"]
var imageIndex = 0;

function changeImage() {
	myPhoto.setAttribute("src", imageArray[ imageIndex]);
	imageIndex ++;
	if (imageIndex>=imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage,2000);