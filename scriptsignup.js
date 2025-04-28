const signupForm = document.getElementById("signup-form");
const signupBtn = document.querySelector(".signup-btn");
const toggleSignupPassword = document.getElementById("toggleSignupPassword");
const newPasswordInput = document.getElementById("new-password");

toggleSignupPassword.addEventListener('click', () => {
  const type = newPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  newPasswordInput.setAttribute('type', type);
  toggleSignupPassword.textContent = type === 'password' ? '👁️' : '🙈';
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signupBtn.classList.add("loading");

  setTimeout(() => {
    alert("Account Created Successfully! 🎉 Now you can login.");
    window.location.href = "indexlogin.html";
    signupBtn.classList.remove("loading");
  }, 1500);
});
