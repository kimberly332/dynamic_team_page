(() => {
  console.log('fried!');
  
  let popUp = document.querySelector(".popup"),
      lbClose = popUp.querySelector("span"),
      buttons = document.querySelectorAll(".button1");

  function showLightbox() {
    popUp.classList.add('showPopup');
  }

  function hideLightbox() {
    popUp.classList.remove('showPopup');
  }


  buttons.forEach(button => button.addEventListener("click", showLightbox));
  lbClose.addEventListener("click", hideLightbox);
})();
