const forgotForm = document.getElementById("forgot-form");
const forgotBtn = document.querySelector(".forgot-btn");

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  forgotBtn.classList.add("loading");

  setTimeout(() => {
    alert("Reset Link Sent to Your Email! 📧");
    window.location.href = "indexlogin.html";
    forgotBtn.classList.remove("loading");
  }, 1500);
});
