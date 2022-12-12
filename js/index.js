// LOADER

jQuery(window).on("load", function () {
  "use strict";
  jQuery("#loader").css("opacity", 0);
  setTimeout(function () {
    jQuery("#loader").hide();
  }, 350);
});

//Hamburger

document.addEventListener("DOMContentLoaded", function (event) {
  let menuOpen = document.getElementById("menu");
  let menuIcon = document.getElementById("nav-icon");
  let body = document.querySelector("body");
  let container = document.getElementById("container");

  if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
      menuIcon.classList.toggle("open");
      body.classList.toggle("scroll-hidden");
      container.classList.toggle("reverse");

      if (this.classList.contains("open")) {
        menuOpen.classList.add("is-active");
      } else {
        menuOpen.classList.remove("is-active");
        container.classList.remove("reverse");
      }
    });
  }
});
// Active Page
$(document).ready(function () {
  $("ul.navigation a").each(function () {
    if (this.href == location.href) $(this).parent().addClass("active");
  });
});

// Slick slider

$(document).ready(function () {
  $(".slider-center").slick({
    arrows: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        //   centerMode: true,
        //   centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
