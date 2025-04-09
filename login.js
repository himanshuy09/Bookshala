console.log("JS loaded successfully.");
const purchaserBtn = document.getElementById('purchaser-btn');
const sellerBtn = document.getElementById('seller-btn');
const loginForm = document.getElementById('login-form');
const createForm = document.getElementById('create-form');
const createAccountLink = document.getElementById('create-account-link');
const backToLogin = document.getElementById('back-to-login');
const formTitle = document.getElementById('form-title');

let currentLoginType = "Purchaser";

// Initial state
formTitle.textContent = "Purchaser Login";

// Button listeners
purchaserBtn.addEventListener("click", () => {
  formTitle.textContent = "Purchaser Login";
  loginForm.style.display = "block";
  createForm.style.display = "none";
  currentLoginType = "Purchaser";
});

sellerBtn.addEventListener("click", () => {
  formTitle.textContent = "Seller Login";
  loginForm.style.display = "block";
  createForm.style.display = "none";
  currentLoginType = "Seller";
});

createAccountLink.addEventListener("click", (e) => {
  e.preventDefault();
  formTitle.textContent = 'Create Account';
  loginForm.style.display = "none";
  createForm.style.display = "block";
});

backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  formTitle.textContent = ' Login';
  loginForm.style.display = "block";
  createForm.style.display = "none";
});

