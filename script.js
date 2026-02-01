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

    // Logic for catno image
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

function createHeartBurst(event) {
    var button = event.currentTarget;
    var rect = button.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;

    var hearts = ['💖', '💕', '💗', '💓', '💘', '❤️', '💝', '💞'];
    var numHearts = 12;

    for (var i = 0; i < numHearts; i++) {
        var heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        // Random direction
        var angle = (i / numHearts) * 360;
        var distance = 60 + Math.random() * 40;
        var tx = Math.cos(angle * Math.PI / 180) * distance;
        var ty = Math.sin(angle * Math.PI / 180) * distance - 30; // Bias upward

        heart.style.cssText = `
            left: ${centerX}px;
            top: ${centerY}px;
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;

        document.body.appendChild(heart);

        // Remove after animation
        setTimeout(function () {
            heart.remove();
        }, 1500);
    }
}

function showCongrats() {
    // Create heart burst effect
    createHeartBurst(event);

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

    // Show congrats overlay with slight delay for heart effect
    setTimeout(function () {
        if (congratsSection) {
            congratsSection.style.display = "flex";
        }
    }, 300);
}
