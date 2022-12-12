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

  //Scroll to anchor
  const menuLinks = document.querySelectorAll("a[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLink);
    });

    function onMenuLink(e) {
      const menuLink = e.target;
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoSection = document.querySelector(menuLink.dataset.goto);
        const gotoSectionValue =
          gotoSection.getBoundingClientRect().top +
          pageYOffset -
          document.getElementById("top").offsetHeight;

        if (menuOpen.classList.contains("is-active")) {
          menuIcon.classList.remove("open");
          body.classList.remove("scroll-hidden");
          menuOpen.classList.remove("is-active");
        }

        window.scrollTo({
          duration: 1500,
          top: gotoSectionValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});

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
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
