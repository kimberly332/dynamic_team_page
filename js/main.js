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
  ["KIMBERLY", `Hi! My name is Kimberly. I am a Media Interactive Design student who is currently studying at Fanshawe College. I love music and designs, and I couldn’t live without Pinterest for a day because there are so many creative designs that could give me lots of inspiration. It’s interesting to note that people thought it is crazy to hold a pocket smartphone 10 years ago, but ironically almost every people have one now. I would love to become one of those crazy designers who even were judged when they first started, but people just couldn’t live without their designs nowadays.`],
  ["JENNY", `With refined and sensuous skills, I could provide a design that fits each concept. I am studying interactive media design at Fanshawe College. I am in charge of creating and reviewing overall design creation in the team, and developing various skills to design proper concepts. I also have great communication and management skills.
`]
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
