// Get all the image elements
var images = document.getElementsByTagName("img");

// Loop through each image and add click event listeners
for (var i = 0; i < images.length; i++) {
    // Add click event listener to each image
    images[i].addEventListener("click", function() {
        // Show custom message when clicked
        alert("Thanks for purchasing with us");
    });
}



