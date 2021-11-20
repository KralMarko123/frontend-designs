const cl = console.log;
cl("js working!");

const shareBox = document.querySelector(".shareBox");
const shareIcon = document.querySelector(".shareIcon");
const shareIconSVG = shareIcon.children[0].children[0];
cl(shareIconSVG);

let shareIconClicked = false;

shareIcon.addEventListener("click", function () {
  if (!shareIconClicked) {
    shareIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIconSVG.style.transition = "all 0.25s ease-in-out";
    shareIconSVG.setAttribute("fill", "white");

    shareBox.style.display = "flex";

    setTimeout(() => {
      shareBox.classList.add("shareBoxShow");
    }, 50);

    shareIconClicked = true;
    //cl("clicked");
  } else {
    shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIconSVG.style.transition = "all 0.25s ease-in-out";
    shareIconSVG.setAttribute("fill", "#6E8098");

    shareBox.classList.remove("shareBoxShow");

    setTimeout(() => {
      shareBox.style.display = "none";
    }, 250);

    shareIconClicked = false;
    //cl("unclicked");
  }
});
