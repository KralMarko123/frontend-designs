const cl = console.log;
cl("js working!");

const submitBtn = document.querySelector(".formButton");
const inputs = document.querySelectorAll(".inputBar");
const inputContainers = document.querySelectorAll(".inputContainer");

submitBtn.addEventListener("click", function () {
  inputs.forEach((input) => {
    checkInputs(input);
  });
});

function checkInputs(input) {
  if (input.value == "") {
    input.parentElement.classList.add("inputBarError");
  } else {
    if (input.placeholder == "Email Address") {
      let emailPassed = validateEmail(input.value);
      if (emailPassed) {
        input.parentElement.classList.remove("inputBarError");
        input.style.color = "hsl(249, 10%, 26%)";
      } else {
        input.style.color = "hsl(0, 100%, 74%)";
        input.parentElement.classList.add("inputBarError");
      }
    } else {
      input.parentElement.classList.remove("inputBarError");
    }
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
