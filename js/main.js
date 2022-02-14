const swiper = new Swiper('.main-slider', {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main-slider_arrow',
    }, 
    breakpoints: {
        320:{
          slidesPerView: 1,
        },
        768:{
          slidesPerView:2,
        }
    }
  });
  let burger = document.querySelector('.menu-burger');
  let closeWindow = document.querySelector('.header_menu-close');
  let menuMobile = document.querySelector('.header');

  burger.addEventListener('click', (e) => {
      menuMobile.style.display = 'block';
  })
  closeWindow.addEventListener('click', (e) => {
    menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main_button-play');

buttonModal.addEventListener('click', (e) => {
        modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_inner');
  if(!isModal){
    modalWindow.classList.remove('active');
  }
})