document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Navigation Elements & Toggles ---
    const menuToggle = document.getElementById('menuToggle');
    const navBarNav = document.getElementById('navbarNav');
    const userIcon = document.getElementById('userIcon');
    const loginDropdown = document.getElementById('loginDropdown');
    const loginForm = document.getElementById('loginForm');
    const exploreButton = document.getElementById('exploreButton'); // New: Target the Explore button

    // Hamburger Toggle Logic
    menuToggle.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        if (navbarNav.classList.contains('active')) {
            loginDropdown.classList.remove('active');
        }
    });

    // User Icon / Login Dropdown Toggle Logic
    userIcon.addEventListener('click', function(event) {
        event.preventDefault(); 
        loginDropdown.classList.toggle('active');
        if (loginDropdown.classList.contains('active')) {
            navbarNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close login dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!loginDropdown.contains(event.target) && !userIcon.contains(event.target) && loginDropdown.classList.contains('active')) {
            loginDropdown.classList.remove('active');
        }
    });

    // Handle Login Form Submission (Placeholder)
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert(`Login attempt with Email: ${email}, Password: ${password}\n(In a real application, this would send data to a server)`);
        loginDropdown.classList.remove('active'); 
        loginForm.reset(); 
    });

    // 🌟🌟🌟 2. CORRECTED EXPLORE BUTTON LOGIC 🌟🌟🌟
    // This now redirects the user to the 'packages.html' page when clicked.
    exploreButton.addEventListener('click', function() {
        window.location.href = 'packages.html'; 
    });


    // -------------------------------------------------------------
    // --- 3. Image Slider/Animation Logic (Your provided code) ---
    // -------------------------------------------------------------
    
    // IMPORTANT: Update these image URLs to match the files you save in your 'images/' folder.
    const images = [
        'images/hero1.jpg', // e.g., Desert/Mountain image from your screenshot
        'images/hero2.jpg', // e.g., Beach image
        'images/hero3.jpg'  // e.g., Cityscape image
    ];

    // NOTE: You must have an element with id="sliderContainer" in your HTML 
    // where you want the background to change (e.g., inside the header).
    const sliderContainer = document.getElementById('sliderContainer'); 
    let currentImageIndex = 0;
    
    // Check if sliderContainer exists before running slider logic
    if (sliderContainer) {
        // Function to change the background image
        function changeSlide() {
            // Create a new div for the incoming image
            const newSlide = document.createElement('div');
            newSlide.classList.add('slider-image-container');
            
            // Set the background image
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
    }
});
