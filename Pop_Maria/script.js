//Cache the DOM
var body=document.getElementById("body")
var button=document.getElementById("button")




//Add eventListener to button
button.addEventListener("dblclick", startSlideshow)

function startSlideshow()
 {
  const slideshow = document.getElementById("slideshow");
  const images = ["sc1.jpg", "sc2.jpg", "sc3.jpg", "sc4.jpg"];
  let index = 0;


  setInterval(() => {
    index++;
    if (index === images.length) {
      index = 0;
    }

    slideshow.innerHTML = `<img src="${images[index]}" alt="Imagine ${index + 1}">`;
}, 3000);
	

}

