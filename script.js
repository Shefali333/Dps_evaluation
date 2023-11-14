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
	  document.getElementById("validationResult").innerText = "Password must be 8-16 characters long."
	}
	// establishing connection to API
	async function checkDictionaryWords(password) {
		const apiKey = 'b1ff4c581emshd0c3fb70854cfd4p1e5fdcjsn8027281c105a'; // Replace with your actual WordsAPI key
		const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${password}`;
  
		try {
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
			'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
			'X-RapidAPI-Key': apiKey,
			},
		});
	
		const data = await response.json();
	
		// Check if the API response indicates that the word is not found using Node.js
		//  return !(data && data.results && data.results.length === 0);
		//} catch (error) {
		// console.error('Error checking dictionary words:', error);
		// return false;
		//}
		// Example usage
		const containsDictionaryWords = await checkDictionaryWords(password);
		if (containsDictionaryWords) {
		document.getElementById("validationResult").innerText = "The Password contains valid English words.";
		} else {
		document.getElementById("validationResult").innerText = "The Password contains invalid English words.";
		} return !(data && data.results && data.results.length === 0);
		} catch (error) {
		console.error('Error checking dictionary words:', error);
		return false;
		}
	}
}
