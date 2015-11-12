window.addEventListener("load", function() {

    var mySlideShow = document.getElementById("slideShow");
    var imageArray = ["../images/GloweeSlideshow1.png", "../images/GloweeSlideshow2.png", "../images/GloweeSlideshow1.png", "../images/GloweeSlideshow2.png"]
    var imageIndex = 0;

    function changeImage() {
        myPhoto.setAttribute("src", imageArray[ imageIndex]);
        imageIndex ++;
        if (imageIndex>=imageArray.length) {
            imageIndex = 0;
        }
    }

    var intervalHandle = setInterval(changeImage,2000);
});