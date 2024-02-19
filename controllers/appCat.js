const swiperCat = new Swiper('.swiper-cat', {
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
  
  const swiperCat1 = new Swiper('.swiper-cat1', {
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
  
  const swiperCat2 = new Swiper('.swiper-cat2', {
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