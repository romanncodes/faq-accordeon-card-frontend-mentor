var acc = document.getElementsByClassName("item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    console.log(this.children[0].children[1]);
    var img = this.children[0].children[1];
    //transform: rotate(180deg);

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      this.style.fontWeight = "400";
      panel.style.display = "none";
      panel.style.maxHeight = null;
      img.style.transform = "rotate(0deg)";
    } else {
      this.style.fontWeight = "700";
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
      img.style.transform = "rotate(-180deg)";
    }
    console.log(panel.style.maxHeight);
  });
}
