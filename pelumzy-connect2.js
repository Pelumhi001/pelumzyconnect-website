// Toggle signup password visibility
function toggleSignupPassword() {
    const passwordInput = document.getElementById("newPassword");
    const toggleIcon = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.textContent = "🔓";
    } else {
      passwordInput.type = "password";
      toggleIcon.textContent = "🔒";
    }
  }
  
  // Form validation and fake signup logic
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("newPassword").value.trim();
  
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Sign up successful! Welcome, " + username);
      // Redirect to login page (optional)
      // window.location.href = "index.html";
    }
  });
  