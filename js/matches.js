document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        updateSlideTitle(mySwiper);
      },
    },
  });

  updateSlideTitle(mySwiper); 

  function updateSlideTitle(swiper) {
    var currentSlide = swiper.realIndex + 1;
    var titleElement = document.querySelector(".swiper-slide-title");
    titleElement.textContent = "Rodada " + currentSlide;
  }
});
