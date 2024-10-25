const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const strengthMessage = document.getElementById("strengthMessage");

const requirements = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  symbol: /[^A-Za-z0-9]/
};

// Password input event to check requirements
passwordField.addEventListener("input", function () {
  const value = passwordField.value;
  const feedback = document.getElementById("passwordSuggestions");

  document.getElementById("uppercase").style.color = requirements.uppercase.test(value) ? "#3adb76" : "#cc4b37";
  document.getElementById("lowercase").style.color = requirements.lowercase.test(value) ? "#3adb76" : "#cc4b37";
  document.getElementById("number").style.color = requirements.number.test(value) ? "#3adb76" : "#cc4b37";
  document.getElementById("symbol").style.color = requirements.symbol.test(value) ? "#3adb76" : "#cc4b37";

  // Password strength
  let strength = 0;
  if (requirements.uppercase.test(value)) strength++;
  if (requirements.lowercase.test(value)) strength++;
  if (requirements.number.test(value)) strength++;
  if (requirements.symbol.test(value)) strength++;

  if (strength === 4 && value.length >= 8) {
    strengthMessage.textContent = "Strong 💪";
    strengthMessage.className = "strength-message strong";
  } else if (strength >= 3) {
    strengthMessage.textContent = "Medium 🙂";
    strengthMessage.className = "strength-message medium";
  } else {
    strengthMessage.textContent = "Weak 😟";
    strengthMessage.className = "strength-message weak";
  }
});

// Form submission event
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default submission

  let isValid = true; // To check if the form is valid

  // Check all fields
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");

  // Check if name field is empty
  if (!nameField.value.trim()) {
    nameField.classList.add("error");
    nameField.nextElementSibling.style.display = "block";
    isValid = false;
  } else {
    nameField.classList.remove("error");
    nameField.nextElementSibling.style.display = "none";
  }

  // Check if email field is valid
  if (!emailField.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    emailField.classList.add("error");
    emailField.nextElementSibling.style.display = "block";
    isValid = false;
  } else {
    emailField.classList.remove("error");
    emailField.nextElementSibling.style.display = "none";
  }

  // Check if password field is empty
  if (!passwordField.value.trim()) {
    passwordField.classList.add("error");
    passwordField.nextElementSibling.style.display = "block";
    isValid = false;
  } else {
    passwordField.classList.remove("error");
    passwordField.nextElementSibling.style.display = "none";
  }

  // Check if confirm password matches
  if (passwordField.value !== confirmPasswordField.value) {
    confirmPasswordField.classList.add("error");
    confirmPasswordField.nextElementSibling.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordField.classList.remove("error");
    confirmPasswordField.nextElementSibling.style.display = "none";
  }

  // If all fields are valid, show alert and reset form
  if (isValid) {
    alert("Form submitted successfully! 🎉");
    document.getElementById("registrationForm").reset();
    strengthMessage.textContent = ""; // Reset strength message
  }
});
