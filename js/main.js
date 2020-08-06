(() => {
  console.log('fried!');
  
  let popUp = document.querySelector(".popup"),
      lbClose = popUp.querySelector("span"),
      button1 = document.querySelector(".button1"),
      button2 = document.querySelector(".button2"),
      name = document.querySelector(".name"),
      selfIntro = document.querySelector(".selfIntroduction"),
      contents = document.querySelectorAll(".contentContainer"),
      img = document.querySelector(".photo");

  let buttonNum = 0;

  const personalInfo = [
  ["KIMBERLY", `Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam sit amet elit lacinia pellentesque at sit amet quam. Cras id tincidunt ante, nec viverra eros. Proin nec nisl blandit, luctus leo eget, convallis dui. In ac lorem ac nulla sollicitudin consectetur vitae ut elit. Duis nisi mi, vestibulum quis luctus sit amet, consectetur rutrum lorem. Nullam molestie et ex sit amet dapibus. Fusce ultrices orci quis finibus vestibulum. Mauris augue nunc, consequat id nisl vitae, varius pretium purus.`],
  ["JENNY", `Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam sit amet elit lacinia pellentesque at sit amet quam. Cras id tincidunt ante, nec viverra eros. Proin nec nisl blandit, luctus leo eget, convallis dui. In ac lorem ac nulla sollicitudin consectetur vitae ut elit. Duis nisi mi, vestibulum quis luctus sit amet, consectetur rutrum lorem. Nullam molestie et ex sit amet dapibus. Fusce ultrices orci quis finibus vestibulum. Mauris augue nunc, consequat id nisl vitae, varius pretium purus.`]  
  ]

  function changeImage() {
    if (buttonNum == 1) {
      img.src =`images/show1.jpg`;
    }
    else {
      img.src =`images/show2.jpg`;
    }
  }

  function showLightbox(event) {
    popUp.classList.add('showPopup');
    if (this.id == "a"){
      buttonNum = 1;
    } else {
      buttonNum = 2;
    }
  }

  function hideLightbox() {
    popUp.classList.remove('showPopup');
  }

  function showContent() {
    name.textContent = `${personalInfo[this.dataset.offset][0]}`;
    selfIntro.textContent = `${personalInfo[this.dataset.offset][1]}`;
    changeImage();
  }

  button1.addEventListener("click", showLightbox);
  button2.addEventListener("click", showLightbox);
  contents.forEach(content => content.addEventListener("click", showContent));
  lbClose.addEventListener("click", hideLightbox);
})();
