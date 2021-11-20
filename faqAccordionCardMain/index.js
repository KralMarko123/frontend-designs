const cl = console.log;
cl("js working!");

const questions = document.querySelectorAll(".question");
const card = document.querySelector(".card");
const box = document.querySelector(".box");
const boxShadow = document.querySelector(".boxShadow");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] != question) {
        questions[i].classList.remove("questionClicked");
      }

      if (question.classList.contains("questionClicked")) {
        question.classList.remove("questionClicked");
      } else {
        question.classList.add("questionClicked");
      }
    }
  });

  question.addEventListener("mouseover", function () {
    card.style.transform = "translateX(-10px)";
    box.style.transform = "translateX(-30px)";
    boxShadow.style.transform = "translateX(-30px)";
  });

  question.addEventListener("mouseout", function () {
    card.style.transform = "translateX(0)";
    box.style.transform = "translateX(0)";
    boxShadow.style.transform = "translateX(0)";
  });
});
