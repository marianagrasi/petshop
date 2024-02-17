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

/*Collar1 */
   function image(anything) {
    document.querySelector('.slide1').src = anything;
  }

   function changes(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

   let openModal1 = document.querySelector('.collar1');
   let modal1 = document.querySelector('.modal1');
   let closeModal1 = document.querySelector('.modal_close1');
   
   openModal1.addEventListener('click', (a)=>{
       a.preventDefault();
       modal1.classList.add('modal--show1');
   });
   
   closeModal1.addEventListener('click', (a)=>{
       a.preventDefault();
       modal1.classList.remove('modal--show1');
   });
 
 /*Collar2 */
function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }
 
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

 /*Collar3 */
 function imgen(anything) {
    document.querySelector('.slide2').src = anything;
  }

   function change2(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

   let openModal2 = document.querySelector('.collar3');
   let modal2 = document.querySelector('.modal2');
   let closeModal2 = document.querySelector('.modal_close2');
   
   openModal2.addEventListener('click', (a)=>{
       a.preventDefault();
       modal2.classList.add('modal--show2');
   });
   
   closeModal2.addEventListener('click', (a)=>{
       a.preventDefault();
       modal2.classList.remove('modal--show2');
   });

   /*pañuelo1 */
  function img3(anything) {
    document.querySelector('.slide3').src = anything;
  }

   function change3(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

   let openModal3 = document.querySelector('.pañuelo1');
   let modal3 = document.querySelector('.modal3');
   let closeModal3 = document.querySelector('.modal_close3');
   
   openModal3.addEventListener('click', (a)=>{
       a.preventDefault();
       modal3.classList.add('modal--show3');
   });
   
   closeModal3.addEventListener('click', (a)=>{
       a.preventDefault();
       modal3.classList.remove('modal--show3');
   });


    /*pañuelo2 */
    function img4(anything) {
        document.querySelector('.slide4').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal4 = document.querySelector('.pañuelo2');
      let modal4= document.querySelector('.modal4');
      let closeModal4= document.querySelector('.modal_close4');
      
      openModal4.addEventListener('click', (e)=>{
          e.preventDefault();
          modal4.classList.add('modal--show4');
      });
      
      closeModal4.addEventListener('click', (e)=>{
          e.preventDefault();
          modal4.classList.remove('modal--show4');
      });
      
    /*pañuelo3 */
    function img5(anything) {
        document.querySelector('.slide5').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal5 = document.querySelector('.pañuelo3');
      let modal5= document.querySelector('.modal5');
      let closeModal5= document.querySelector('.modal_close5');
      
      openModal5.addEventListener('click', (e)=>{
          e.preventDefault();
          modal5.classList.add('modal--show5');
      });
      
      closeModal5.addEventListener('click', (e)=>{
          e.preventDefault();
          modal5.classList.remove('modal--show5');
      });
      /*arnes1*/
    function img6(anything) {
        document.querySelector('.slide6').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal6 = document.querySelector('.arnes1');
      let modal6= document.querySelector('.modal6');
      let closeModal6= document.querySelector('.modal_close6');
      
      openModal6.addEventListener('click', (e)=>{
          e.preventDefault();
          modal6.classList.add('modal--show6');
      });
      
      closeModal6.addEventListener('click', (e)=>{
          e.preventDefault();
          modal6.classList.remove('modal--show6');
      });
      /*arnes2 */
    function img7(anything) {
        document.querySelector('.slide7').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal7 = document.querySelector('.arnes2');
      let modal7= document.querySelector('.modal7');
      let closeModal7= document.querySelector('.modal_close7');
      
      openModal7.addEventListener('click', (e)=>{
          e.preventDefault();
          modal7.classList.add('modal--show7');
      });
      
      closeModal7.addEventListener('click', (e)=>{
          e.preventDefault();
          modal7.classList.remove('modal--show7');
      });
         /*arnes3*/
    function img8(anything) {
        document.querySelector('.slide8').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal8 = document.querySelector('.arnes3');
      let modal8= document.querySelector('.modal8');
      let closeModal8= document.querySelector('.modal_close8');
      
      openModal8.addEventListener('click', (e)=>{
          e.preventDefault();
          modal8.classList.add('modal--show8');
      });
      
      closeModal8.addEventListener('click', (e)=>{
          e.preventDefault();
          modal8.classList.remove('modal--show8');
      });
      
          /*sueter1*/
    function img9(anything) {
        document.querySelector('.slide9').src = anything;
      }
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
     
      let openModal9 = document.querySelector('.sueter1');
      let modal9= document.querySelector('.modal9');
      let closeModal9= document.querySelector('.modal_close9');
      
      openModal9.addEventListener('click', (e)=>{
          e.preventDefault();
          modal9.classList.add('modal--show9');
      });
      
      closeModal9.addEventListener('click', (e)=>{
          e.preventDefault();
          modal9.classList.remove('modal--show9');
      });
       
         /*sueter3*/
         function img11(anything) {
            document.querySelector('.slide11').src = anything;
          }
        
          function change(change) {
            const line = document.querySelector('.home');
            line.style.background = change;
          }
         
          let openModal11 = document.querySelector('.sueter3');
          let modal11= document.querySelector('.modal11');
          let closeModal11= document.querySelector('.modal_close11');
          
          openModal11.addEventListener('click', (e)=>{
              e.preventDefault();
              modal11.classList.add('modal--show11');
          });
          
          closeModal11.addEventListener('click', (e)=>{
              e.preventDefault();
              modal11.classList.remove('modal--show11');
          });   
 
 
 
 
 



 




 


  