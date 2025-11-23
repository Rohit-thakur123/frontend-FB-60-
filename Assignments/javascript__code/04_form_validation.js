let form = document.querySelector("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");  

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

function validateForm() {
    // Clear previous error messages
    clearErrors();  
    let isValid = true;

    // Username validation
    if (username.value.trim() === "") {
        showError(username, "Username is required.");
        isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
    }
    // Password validation
    if (password.value === "") {
        showError(password, "Password is required.");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters long.");
        isValid = false;
    }
    // Confirm Password validation
    if (confirmPassword.value === "") {
        showError(confirmPassword, "Please confirm your password.");
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match.");
        isValid = false;
    }
    return isValid;
}

function showError(inputElement, message) {
    let errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.innerText = message;
    inputElement.parentElement.appendChild(errorElement);
    inputElement.classList.add("input-error");
}

function clearErrors() {
    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
        error.remove();
    });
    let errorInputs = document.querySelectorAll(".input-error");
    errorInputs.forEach(function(input) {
        input.classList.remove("input-error");
    });
}

function isValidEmail(email) {
    // Simple email validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

