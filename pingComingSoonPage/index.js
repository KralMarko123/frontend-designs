const cl = console.log;
cl("js working!");

const inputContainer = document.querySelector(".formContainer");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".formButton");

submitBtn.addEventListener("click", function () {
  let inputVal = input.value;

  if (inputVal != "" && validateEmail(inputVal)) {
    inputContainer.classList.remove("inputError");
  } else {
    inputContainer.classList.add("inputError");
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
