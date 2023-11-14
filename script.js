function validatePassword() {
	var password = document.getElementById("password").value;
  
	if (password.length >= 8 && password.length <= 16) {
	  if (/^[a-zA-Z]+[0-9]/.test(password)) {
		// You can implement the dictionary API check here for full English words.
		document.getElementById("validationResult").innerText = "Valid password!";
	  } else {
		document.getElementById("validationResult").innerText = "Password must contain letters and at least one digit.";
	  }
	} else {
	  document.getElementById("validationResult").innerText = "Password must be 8-16 characters long.";
	}
  }