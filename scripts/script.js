const submitButton = document.querySelector("#submit-button");
const emailInput = document.querySelector("#email-input");
const warningMessage = document.querySelector("#warning-message")
submitButton.addEventListener("click", emailValidation);

function emailValidation(e){
	if (!isEmailValid(emailInput.value)){
		emailInput.style.borderColor = 'red';
		warningMessage.style.display = 'block';
	}
}

function isEmailValid(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
