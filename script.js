// --- 1. Responsive Navigation Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

// --- 2. Image Slider/Animation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANT: Update these image URLs to match the files you save in your 'images/' folder.
    const images = [
        'images/hero1.jpg', // e.g., Desert/Mountain image from your screenshot
        'images/hero2.jpg', // e.g., Beach image
        'images/hero3.jpg'  // e.g., Cityscape image
    ];

    const sliderContainer = document.getElementById('sliderContainer');
    let currentImageIndex = 0;

    // Function to change the background image
    function changeSlide() {
        // Create a new div for the incoming image
        const newSlide = document.createElement('div');
        newSlide.classList.add('slider-image-container');
        
        // Set the background image (Ensure you have these images in your 'images' folder)
        newSlide.style.backgroundImage = `url(${images[currentImageIndex]})`;
        
        // Preload image before fading in
        const img = new Image();
        img.onload = () => {
             // Append the new slide to the main container
            sliderContainer.appendChild(newSlide);

            // Give a moment for the new slide to be added to the DOM before fading in
            setTimeout(() => {
                newSlide.classList.add('active');
            }, 50); 
            
            // Remove the old slide after the transition is complete
            if (sliderContainer.children.length > 1) {
                const oldSlide = sliderContainer.children[0];
                // Wait for the transition duration (1.5s from CSS) before removing
                setTimeout(() => {
                    sliderContainer.removeChild(oldSlide);
                }, 1500); 
            }
        };
        img.src = images[currentImageIndex]; // Start loading the image

        // Move to the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Start the slider immediately
    changeSlide();

    // Set an interval to change the slide every 5 seconds (5000 milliseconds)
    setInterval(changeSlide, 5000); 
});