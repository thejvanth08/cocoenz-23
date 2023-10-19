document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the .menu element
  const menu = document.querySelector(".menu");

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
