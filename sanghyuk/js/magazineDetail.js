const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 20,
  centeredSlides: true,
});
$link = document.querySelectorAll(".swiper-slide");
$link.forEach((e) => {
  e.style.cursor = 'pointer'
  e.addEventListener('click', () => {
    location.pathname = "/productDetail";
  })
})
