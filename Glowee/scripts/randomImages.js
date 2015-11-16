/*
    FILE NAME: style/style.css
    WRITTEN BY: Ingrid Skar
    WHEN: November 2016
    PURPOSE: Javascript for slide show
*/
    var mySlideShow = document.getElementById("slideShow");
    // Push images into array
    var imageArray = ["../images/GloweeSlideshow1.png", "../images/GloweeSlideshow2.png", "../images/GloweeSlideshow3.jpg", "../images/GloweeSlideshow2.png"]
    var imageIndex = 0;

    // changes images
    function changeImage() {
        mySlideShow.setAttribute("src", imageArray[ imageIndex]);
        imageIndex ++;
        if (imageIndex>=imageArray.length) {
            imageIndex = 0;
        }
    }

    //sets interval
    var intervalHandle = setInterval(changeImage,3000);
