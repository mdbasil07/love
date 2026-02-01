var currentCryingImageIndex = 0;

function showNextCryingImage() {
    var cryingImages = document.querySelectorAll(".crying-image");
    var cryingTexts = document.querySelectorAll(".crying-text");
    var catnoImage = document.getElementById("catno-image");
    var congratsSection = document.getElementById("congrats-section");

    // Hide all crying images and texts
    cryingImages.forEach(function (img) {
        img.style.display = "none";
    });
    cryingTexts.forEach(function (text) {
        text.style.display = "none";
    });

    // Increment index
    currentCryingImageIndex++;

    if (currentCryingImageIndex >= cryingImages.length) {
        currentCryingImageIndex = 0;
    }

    // Show current pair
    if (cryingImages[currentCryingImageIndex]) cryingImages[currentCryingImageIndex].style.display = "block";
    if (cryingTexts[currentCryingImageIndex]) cryingTexts[currentCryingImageIndex].style.display = "block";

    // Logic for catno image (only on last slide of loop? Originally it was: if index == length-1)
    if (currentCryingImageIndex === cryingImages.length - 1) {
        catnoImage.style.display = "block";
    } else {
        catnoImage.style.display = "none";
    }

    // Ensure congrats is hidden
    if (congratsSection) {
        congratsSection.style.display = "none";
    }
}

function showCongrats() {
    var congratsSection = document.getElementById("congrats-section");
    var catnoImage = document.getElementById("catno-image");
    var cryingImages = document.querySelectorAll(".crying-image");
    var cryingTexts = document.querySelectorAll(".crying-text");

    // Hide everything else
    cryingImages.forEach(function (img) {
        img.style.display = "none";
    });
    cryingTexts.forEach(function (text) {
        text.style.display = "none";
    });
    if (catnoImage) {
        catnoImage.style.display = "none";
    }

    // Show congrats overlay
    if (congratsSection) {
        congratsSection.style.display = "flex"; /* Use flex to active the CSS centering */
    }
}
