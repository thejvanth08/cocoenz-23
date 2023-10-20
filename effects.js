// ----------- Horizontal Scroll

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sliders",
    // pin: ".body",
    pin: true,
    pinSpacing: true,
    scrub: 1,
    end: "+=1500",
  },
});

// ------------------------- For particles enable
const config = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fcee0a",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fffccc",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", config);
});

// ------------------- AOS
const aosConfig = {
  duration: 1000,
};

AOS.init(aosConfig);

// --------------------- About Card hover effect

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

//------------------------ Slider effects
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});

// Shuffle effect
document.addEventListener("DOMContentLoaded", function () {
  // Set effect velocity in ms
  // high means slow
  var velocity = 80;

  var shuffleElements = document.querySelectorAll(".shuffle");

  shuffleElements.forEach(function (element) {
    element.dataset.text = element.textContent;
  });

  var shuffle = function (o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  var shuffleText = function (element, originalText) {
    var elementTextArray = [];
    var randomText = [];

    for (var i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt(i));
    }

    var repeatShuffle = function (times, index) {
      if (index == times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(function () {
        randomText = shuffle(elementTextArray);
        for (var i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  shuffleElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      shuffleText(this, this.dataset.text);
    });
  });
});
