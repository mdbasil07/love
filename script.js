var currentCryingImageIndex = 0;

function showNextCryingImage() {
    var cryingImages = document.querySelectorAll(".crying-image");
    var cryingTexts = document.querySelectorAll(".crying-text");
    var catnoImage = document.getElementById("catno-image");

    cryingImages.forEach(function(img) {
        img.style.display = "none";
    });
    cryingTexts.forEach(function(text) {
        text.style.display = "none";
    });

    currentCryingImageIndex++;

    if (currentCryingImageIndex >= cryingImages.length) {
        currentCryingImageIndex = 0;
    }

    cryingImages[currentCryingImageIndex].style.display = "block";
    cryingTexts[currentCryingImageIndex].style.display = "block";

    if (currentCryingImageIndex === cryingImages.length - 1) {
        catnoImage.style.display = "block";
    } else {
        catnoImage.style.display = "none";
    }

    var congratsImage = document.getElementById("congrats-image");
    var congratsText = document.getElementById("crying-text-9");
    congratsImage.style.display = "none";
    congratsText.style.display = "none";
}

function showCongrats() {
    var congratsImage = document.getElementById("congrats-image");
    var congratsText = document.getElementById("crying-text-9");
    var catnoImage = document.getElementById("catno-image");
    var cryingImages = document.querySelectorAll(".crying-image");
    var cryingTexts = document.querySelectorAll(".crying-text");

    cryingImages.forEach(function(img) {
        img.style.display = "none";
    });
    cryingTexts.forEach(function(text) {
        text.style.display = "none";
    });

    congratsImage.style.display = "block";
    congratsText.style.display = "block";

    catnoImage.style.display = "none";
}
