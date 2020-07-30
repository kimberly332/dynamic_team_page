// Declare variables


(() => {
  if (typeof document !== 'undefined') {
    let count = 0; // count number of clicks

    let getImages = document.querySelectorAll("img");

    function onClick() {
      let msg = "Clicked on a graph - this one: " + this.id;
      console.log(msg);

      // add filter
      var element = document.querySelectorAll("wrapper");
      this.classList.toggle("grayscale");
    }
    getImages.forEach(img => img.addEventListener("click", onClick));

  }

})();
