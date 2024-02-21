const swiperDog = new Swiper('.swiper-dog', {
    // Optional parameters
  direction: 'vertical',
  speed:600,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    slidesPerView: 2,
    spaceBetween:10, 
  });
  
  const swiperDog1 = new Swiper('.swiper-dog1', {
  // Optional parameters
  direction: 'vertical',
  speed:600,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
    slidesPerView: 3,
    spaceBetween: 10, 
  });
  
  const swiperDog2 = new Swiper('.swiper-dog2', {
  // Optional parameters
  direction: 'vertical',
  speed:600,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    slidesPerView: 2,
    spaceBetween: 10, 
  });

  function toggleBanner(){
    const banner = document.querySelector('.banner');
    const bannerMiddle = document.querySelector('.banner-middle');
    const bannerRight = document.querySelector('.banner-right');
    banner.classList.toggle('active');
    bannerMiddle.classList.toggle('active');
    bannerRight.classList.toggle('active');
  }