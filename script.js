// Toggle visibility of the menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Example payment handlers (optional: used in index2.html if needed)
function payWithGooglePay() {
  window.location.href = "upi://pay?pa=yourmerchant@upi&pn=MerchantName&mc=1234&tid=UNIQUE_TXN_ID&tr=UNIQUE_ORDER_ID&tn=Payment%20for%20Order&am=AMOUNT&cu=INR";
}

function payWithPaytm() {
  window.location.href = "https://paytm.com/pay?pa=yourmerchant@paytm&pn=MerchantName&am=AMOUNT&cu=INR";
}

function payWithPhonePe() {
  window.location.href = "phonepe://pay?pa=yourmerchant@upi&pn=MerchantName&am=AMOUNT&cu=INR";
}

function cashOnDelivery() {
  alert("Your order has been placed with Cash on Delivery option!");
}

// Optional: Hook up event listeners dynamically (if needed)
/*
document.getElementById("paytmBtn").addEventListener("click", payWithPaytm);
document.getElementById("gpayBtn").addEventListener("click", payWithGooglePay);
document.getElementById("phonepeBtn").addEventListener("click", payWithPhonePe);
document.getElementById("codBtn").addEventListener("click", cashOnDelivery);
*/
