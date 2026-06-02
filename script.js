// Get elements from the HTML
const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");

const lengthCheck = document.getElementById("lengthCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const lowercaseCheck = document.getElementById("lowercaseCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");

// Check password every time the user types
passwordInput.addEventListener("input", checkPasswordStrength);

// Show or hide password
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});

function checkPasswordStrength() {
  const password = passwordInput.value;

  let score = 0;

  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  if (hasLength) score++;
  if (hasUppercase) score++;
  if (hasLowercase) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;

  updateRequirement(lengthCheck, hasLength);
  updateRequirement(uppercaseCheck, hasUppercase);
  updateRequirement(lowercaseCheck, hasLowercase);
  updateRequirement(numberCheck, hasNumber);
  updateRequirement(symbolCheck, hasSymbol);

  if (password.length === 0) {
    strengthText.textContent = "Password strength: Not checked";
    strengthFill.style.width = "0%";
    strengthFill.style.backgroundColor = "transparent";
  } else if (score <= 2) {
    strengthText.textContent = "Password strength: Weak";
    strengthFill.style.width = "33%";
    strengthFill.style.backgroundColor = "#ef4444";
  } else if (score <= 4) {
    strengthText.textContent = "Password strength: Medium";
    strengthFill.style.width = "66%";
    strengthFill.style.backgroundColor = "#f59e0b";
  } else {
    strengthText.textContent = "Password strength: Strong";
    strengthFill.style.width = "100%";
    strengthFill.style.backgroundColor = "#22c55e";
  }
}

function updateRequirement(element, isValid) {
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}