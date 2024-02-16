let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

/*Modal */
function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

 /*Collar1 */
 
 



 /*Collar2 */
  let openModal = document.querySelector('.collar2');
  let modal = document.querySelector('.modal');
  let closeModal= document.querySelector('.modal_close');
  
  openModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.add('modal--show');
  });
  
  closeModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.remove('modal--show');
  });



   /*Collar1 */
   let openModal1 = document.querySelector('.collar1');
   let modal1 = document.querySelector('.modal1');
   let closeModal1 = document.querySelector('.modal_close1');
   
   openModal1.addEventListener('click', (e)=>{
       e.preventDefault();
       modal1.classList.add('modal--show');
   });
   
   closeModal1.addEventListener('click', (e)=>{
       e.preventDefault();
       modal1.classList.remove('modal--show');
   });
  