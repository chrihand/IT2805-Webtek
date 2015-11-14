
    var mySlideShow = document.getElementById("slideShow");
    var imageArray = ["../images/GloweeSlideshow1.png", "../images/GloweeSlideshow2.png", "../images/GloweeSlideshow3.jpg", "../images/GloweeSlideshow2.png"]
    var imageIndex = 0;

    function changeImage() {
        mySlideShow.setAttribute("src", imageArray[ imageIndex]);
        imageIndex ++;
        if (imageIndex>=imageArray.length) {
            imageIndex = 0;
        }
    }

    var intervalHandle = setInterval(changeImage,3000);
