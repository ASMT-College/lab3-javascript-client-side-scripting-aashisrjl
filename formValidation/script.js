document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      return; // Stop further execution
    }
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 chars, 1 letter, 1 number
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long and include at least one letter and one number.";
      return; // Stop further execution
    }
  
    alert("Form submitted successfully!");
   
    // event.target.submit();
  });