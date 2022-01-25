//VARIABLES
const options = document.querySelectorAll(".menu__option");
const currentHours = document.querySelectorAll(".hours__current");
const previousHours = document.querySelectorAll(".hours__previous");

//HELPER FUNCTIONS
const toggleActive = (element) => {
  element.classList.contains("active")
    ? element.classList.remove("active")
    : element.classList.add("active");
};

const removeActiveLinks = () => {
  options.forEach((option) => {
    option.classList.remove("active");
  });
};

const hideValues = () => {
  currentHours.forEach((hour) => {
    hour.style.transform = "translateY(100%)";
    hour.style.opacity = 0;
  });

  previousHours.forEach((hour) => {
    hour.style.transform = "translateX(100%)";
    hour.style.opacity = 0;
  });
};

const showValues = () => {
  currentHours.forEach((hour) => {
    hour.style.transform = "translateY(0)";
    hour.style.opacity = 1;
  });

  previousHours.forEach((hour) => {
    hour.style.transform = "translateX(0)";
    hour.style.opacity = 1;
  });
};

//LISTENERS
options.forEach((option) => {
  option.addEventListener("click", () => {
    removeActiveLinks();
    toggleActive(option);

    switch (option.innerHTML.toLowerCase()) {
      case "daily":
        hideValues();
        setTimeout(() => {
          setDaily();
          showValues();
        }, 500);
        break;
      case "weekly":
        hideValues();
        setTimeout(() => {
          setWeekly();
          showValues();
        }, 500);
        break;
      case "monthly":
        hideValues();
        setTimeout(() => {
          setMonthly();
          showValues();
        }, 500);
        break;
      default:
        break;
    }
  });
});

//METHODS

const setDaily = () => {
  for (let i = 0; i < json.length; i++) {
    let hoursJson = json[i].timeframes.daily.current;
    let previousHoursJson = json[i].timeframes.daily.previous;
    let hoursSuffix = "hr";
    let previousHoursSuffix = "hr";

    if (hoursJson > 1 || hoursJson === 0) hoursSuffix = "hrs";
    if (previousHoursJson > 1 || previousHoursJson === 0)
      previousHoursSuffix = "hrs";

    currentHours[i].innerHTML = `${hoursJson + hoursSuffix}`;
    previousHours[i].innerHTML = `Yesterday - ${
      previousHoursJson + previousHoursSuffix
    }`;
  }
};

const setWeekly = () => {
  for (let i = 0; i < json.length; i++) {
    let hoursJson = json[i].timeframes.weekly.current;
    let previousHoursJson = json[i].timeframes.weekly.previous;
    let hoursSuffix = "hr";
    let previousHoursSuffix = "hr";

    if (hoursJson > 1 || hoursJson === 0) hoursSuffix = "hrs";
    if (previousHoursJson > 1 || previousHoursJson === 0)
      previousHoursSuffix = "hrs";

    currentHours[i].innerHTML = `${hoursJson + hoursSuffix}`;
    previousHours[i].innerHTML = `Last Week - ${
      previousHoursJson + previousHoursSuffix
    }`;
  }
};

const setMonthly = () => {
  for (let i = 0; i < json.length; i++) {
    let hoursJson = json[i].timeframes.monthly.current;
    let previousHoursJson = json[i].timeframes.monthly.previous;
    let hoursSuffix = "hr";
    let previousHoursSuffix = "hr";

    if (hoursJson > 1 || hoursJson === 0) hoursSuffix = "hrs";
    if (previousHoursJson > 1 || previousHoursJson === 0)
      previousHoursSuffix = "hrs";

    currentHours[i].innerHTML = `${hoursJson + hoursSuffix}`;
    previousHours[i].innerHTML = `Last Month - ${
      previousHoursJson + previousHoursSuffix
    }`;
  }
};
