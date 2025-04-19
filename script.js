document.addEventListener("DOMContentLoaded", () => {
    // Toggle navigation menu for mobile
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Handle login/signup modal
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    loginBtn.addEventListener("click", () => loginModal.style.display = "block");
    signupBtn.addEventListener("click", () => signupModal.style.display = "block");

    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) loginModal.style.display = "none";
        if (event.target === signupModal) signupModal.style.display = "none";
    });

    // Handle Login Form Submission
    const loginForm = document.getElementById("loginForm");
    const userProfile = document.getElementById("userProfile");
    const usernameDisplay = document.getElementById("username");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;

        // Simulate login (you should replace this with real authentication)
        userProfile.classList.remove("hidden");
        usernameDisplay.textContent = email.split("@")[0]; // Extract username from email
        loginModal.style.display = "none";
        alert("Login successful!");
    });

    // Filter packages
    const filterButtons = document.querySelectorAll(".filter-btn");
    const packageCards = document.querySelectorAll(".package-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            packageCards.forEach(card => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Search functionality for destinations
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-container input");
    const destinationCards = document.querySelectorAll(".destination-card");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        destinationCards.forEach(card => {
            const destination = card.querySelector("h3").textContent.toLowerCase();
            if (destination.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Newsletter subscription
    const newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        newsletterForm.reset();
    });

    // Carousel Functionality for Guides Section
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const guideCards = document.querySelectorAll(".guide-card");
    let currentIndex = 0;

    function showGuide(index) {
        guideCards.forEach((card, i) => {
            card.style.display = i === index ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + guideCards.length) % guideCards.length;
        showGuide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % guideCards.length;
        showGuide(currentIndex);
    });

    showGuide(currentIndex); // Initialize carousel

    // Booking Form Validation & Price Calculation
    const bookingForm = document.getElementById("bookingForm");
    const departureDate = document.getElementById("departureDate");
    const travelersInput = document.getElementById("travelers");
    const totalPriceElement = document.getElementById("totalPrice");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const travelers = parseInt(travelersInput.value, 10);
        const basePrice = 2499; // Example price per person
        const totalPrice = travelers * basePrice;

        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
        alert(`Booking successful! Total cost: $${totalPrice}`);
    });
});
