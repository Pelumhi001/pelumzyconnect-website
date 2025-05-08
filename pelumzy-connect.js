// pelumzy-connect.js

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.textContent = "🔓"; // Change to unlocked icon
    } else {
      passwordInput.type = "password";
      toggleIcon.textContent = "🔒"; // Change back to locked icon
    }
  }
  
  // Form validation
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form submission for validation
  
    // Get the username and password input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Simple validation for empty fields
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      // Show success message (you can replace this with real backend authentication logic)
      alert("Login successful! Welcome, " + username);
      
      // Normally here, you would submit the form data to a backend or API:
      // Example: Submit the data using fetch or XMLHttpRequest
      // You can use the following if you connect to a backend:
      // fetch('/login', { method: 'POST', body: JSON.stringify({ username, password }) });
  
      // For now, let's simulate a redirect (optional)
      // window.location.href = "dashboard.html"; // Redirect to a new page (dashboard)
    }
  });
  