console.log("JavaScript is working!");

// =======================
// CONTACT FORM VALIDATION
// =======================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous errors
        document.getElementById("fullnameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("subjectError").textContent = "";
        document.getElementById("messageError").textContent = "";

        let valid = true;

        // Full Name
        if (fullname === "") {
            document.getElementById("fullnameError").textContent = "Please enter your full name.";
            valid = false;
        }

        // Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
            valid = false;
        }

        // Phone
        const phonePattern = /^[0-9]{10}$/;
        if (phone === "") {
            document.getElementById("phoneError").textContent = "Phone number is required.";
            valid = false;
        } else if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
            valid = false;
        }

        // Subject
        if (subject === "") {
            document.getElementById("subjectError").textContent = "Subject is required.";
            valid = false;
        }

        // Message
        if (message.length < 10) {
            document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        if (valid) {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        }

    });
}

// ========================
// ENQUIRY FORM VALIDATION
// ========================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("enquiryEmail").value.trim();
        const phone = document.getElementById("enquiryPhone").value.trim();
        const service = document.getElementById("service").value;
        const budget = document.getElementById("budget").value.trim();
        const details = document.getElementById("details").value.trim();

        // Error fields
        document.getElementById("nameError").textContent = "";
        document.getElementById("enquiryEmailError").textContent = "";
        document.getElementById("enquiryPhoneError").textContent = "";
        document.getElementById("serviceError").textContent = "";
        document.getElementById("budgetError").textContent = "";
        document.getElementById("detailsError").textContent = "";
        document.getElementById("successMessage").textContent = "";

        let valid = true;

        // Name
        if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your full name.";
            valid = false;
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            document.getElementById("enquiryEmailError").textContent = "Email address is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("enquiryEmailError").textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Phone
        const phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            document.getElementById("enquiryPhoneError").textContent = "Phone number is required.";
            valid = false;
        } else if (!phonePattern.test(phone)) {
            document.getElementById("enquiryPhoneError").textContent = "Phone number must contain exactly 10 digits.";
            valid = false;
        }

        // Service
        if (service === "") {
            document.getElementById("serviceError").textContent = "Please select a service.";
            valid = false;
        }

        // Budget
        if (budget === "") {
            document.getElementById("budgetError").textContent = "Please enter your estimated budget.";
            valid = false;
        }

        // Details
        if (details.length < 10) {
            document.getElementById("detailsError").textContent = "Please provide at least 10 characters describing your enquiry.";
            valid = false;
        }

        // Success
        if (valid) {

            document.getElementById("successMessage").textContent =
                "Thank you! Your enquiry has been submitted successfully. We will contact you soon.";

            enquiryForm.reset();

        }

    });

}

// =====================
// PORTFOLIO LIGHTBOX
// =====================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".close");

if (galleryImages.length > 0) {

    galleryImages.forEach(image => {

        image.addEventListener("click", function () {

            lightbox.style.display = "block";
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;

        });

    });

}

if (closeButton) {

    closeButton.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// =======================
// SERVICE SEARCH
// =======================

const searchInput = document.getElementById("serviceSearch");

if (searchInput) {

    console.log("Search is working");

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();
        const services = document.querySelectorAll(".service-item");

        console.log("Services found:", services.length);

        services.forEach(function(service) {

            const text = service.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                service.style.display = "";
            } else {
                service.style.display = "none";
            }

        });

    });

}