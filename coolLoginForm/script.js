const cl = console.log;
cl("js working!");

const title = document.querySelector(".formTitle");
const submitBtn = document.querySelector(".formSubmit");
const inputs = document.querySelectorAll(".formInput");

submitBtn.addEventListener("click", function () {
  let flag = true;

  inputs.forEach((input) => {
    if (input.value == "") {
      flag = false;
    }
  });

  if (flag) {
    inputs.forEach((input) => {
      input.style.opacity = 0;
    });
    submitBtn.style.opacity = 0;

    title.style.transform = "translateY(120px)";
  }
});
