/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

let particlesFillColor = "#4B0082";
// #4B0082

(function($) {
  "use strict"; // Start of use strict
  //loads particles.js

  let particlesCfg = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: particlesFillColor
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: particlesFillColor
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 0.7,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: particlesFillColor,
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true
        // "attract": {
        //   "enable": false,
        //   "rotateX": 600,
        //   "rotateY": 1200
        // }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 300,
          line_linked: {
            opacity: 0.7485830392471388
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  particlesJS("page-top", particlesCfg);

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $("a.page-scroll").bind("click", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
  });

  // Fit Text Plugin for Main Header
  $(".hero-heading").fitText(1.2, {
    minFontSize: "45px",
    maxFontSize: "80px"
  });

  // Offset for Main Navigation
  $("#mainNav").affix({
    offset: {
      top: 100
    }
  });

  // Toggle visibility of home button on inappropriate heights

  $(document).scroll(() => {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() > 100) {
      $("#scroll-home").show();
      $("#scroll-home").addClass("animated bounceIn");
    } else {
      $("#scroll-home").hide();
    }
  });

  // Initialize WOW.js Scrolling Animations
  new WOW().init();
})(jQuery); // End of use strict
