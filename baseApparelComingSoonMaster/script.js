const cl = console.log;

const input = document.querySelector(".inputBar");
const submitBtn = document.querySelector(".arrowIcon");
const errorIcon = document.querySelector(".errorIcon");
const errorMessage = document.querySelector(".errorMessage");

submitBtn.addEventListener("click", function () {
  if (input.value != "") {
    let inputValue = input.value;
    if (validateEmail(inputValue)) {
      errorIcon.style.opacity = 0;
      errorMessage.style.opacity = 0;
      input.style.border = "1px solid #ce9797";

      setTimeout(() => {
        errorMessage.innerHTML = "Thank you for providing us with your email";
        errorMessage.style.opacity = 1;
      }, 250);
    } else {
      errorMessage.style.opacity = 0;
      errorIcon.style.opacity = 0;

      setTimeout(() => {
        errorMessage.innerHTML = "Please provide a valid email";
        input.style.border = "solid 2px red";
        errorMessage.style.opacity = 1;
        errorIcon.style.opacity = 1;
      }, 250);
    }
  } else {
    errorMessage.style.opacity = 0;
    errorIcon.style.opacity = 0;

    setTimeout(() => {
      input.style.border = "solid 2px red";
      errorMessage.innerHTML = "Please provide a valid email";
      errorMessage.style.opacity = 1;
      errorIcon.style.opacity = 1;
    }, 250);
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
