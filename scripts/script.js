const submitButton = document.querySelector("#submit-button");
const emailInput = document.querySelector("#email-input");
const warningMessage = document.querySelector("#warning-message")
submitButton.addEventListener("click", emailValidation);

function emailValidation(e){
	e.preventDefault();
	if (emailInput.value === "") {
		warningMessage.innerText = "Whoops! It looks like you forgot to add your email";
		displayError();
		return
	}
	if (!isEmailValid(emailInput.value)){
		warningMessage.innerText = "Please provide a valid email address";
		displayError();
	}
}

function displayError() {
	emailInput.style.borderColor = 'red';
	warningMessage.style.display = 'block';
}

function isEmailValid(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
