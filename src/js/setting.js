import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
