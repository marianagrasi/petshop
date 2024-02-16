/*Modal */
function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

  /*Collar1 */
  let openModal = document.querySelector('collar1');
  let modal= document.querySelector('.modal1');
  let closeModal= document.querySelector('.modal_close');
  
  openModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.add('modal--show');
  });
  
  closeModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.remove('modal--show');
  });



