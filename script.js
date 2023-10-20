document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the .menu element
  const menu = document.querySelector(".top-nav");

  // Get references to the events, schedule, and about sections
  const eventsSection = document.getElementById("events");
  const scheduleSection = document.getElementById("schedule");
  const aboutSection = document.getElementById("about");

  // Function to check if the scroll position is within a specific section
  function isScrollInSection(section) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.clientHeight;
    return (
      scrollPosition >= sectionOffset &&
      scrollPosition < sectionOffset + sectionHeight
    );
  }

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    if (isScrollInSection(eventsSection)) {
      // If it is, add the .menu-hidden class to hide the menu
      menu.classList.add("menu-hidden");
    } else if (
      isScrollInSection(scheduleSection) ||
      isScrollInSection(aboutSection)
    ) {
      // If it is within the schedule or about section, remove the .menu-hidden class to show the menu
      menu.classList.remove("menu-hidden");
    }
  });
});

// ----------- Hero Timer
const countdownElement = document.getElementById("countdown");
const daysElement = countdownElement.querySelector("#days");
const hoursElement = countdownElement.querySelector("#hours");
const minutesElement = countdownElement.querySelector("#minutes");
const secondsElement = countdownElement.querySelector("#seconds");

// EVENT DATE
const endDate = new Date("2023-11-1 9:00:00");
let secondsLeft = (endDate.getTime() - new Date().getTime()) / 1000;

function updateCountdown() {
  secondsLeft -= 1;

  const days = Math.floor((secondsLeft / 86400) % 30);
  daysElement.textContent = days < 10 ? "0" + days : days;

  const hours = Math.floor((secondsLeft % 86400) / 3600);
  hoursElement.textContent = hours < 10 ? "0" + hours : hours;

  const minutes = Math.floor((secondsLeft % 3600) / 60);
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;

  const seconds = Math.floor(secondsLeft % 60);
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (secondsLeft <= 0) {
    const countdownContent = document.querySelector(".countdown-content");
    const countdownContentFinal = document.querySelector(
      ".countdown-content-final"
    );
    countdownContent.classList.add("d-none");
    countdownContentFinal.classList.add("d-flex");
  }
}

setInterval(updateCountdown, 1000);

// --------- To add bg when above some scroll position
const scrollHeader = () => {
  const header = document.getElementById("top-nav");
  // when window is scrolled vertically i.e greater than 50,
  // add the scroll class to the header tag
  // console.log(this); this refers window object which is calling the function as a cb
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);
