// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   console.log(slides)
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
//}

// console.log("hlw");
let div1 = document.getElementById('banner');
let div2 = document.getElementById('banner1');
let dot1=document.getElementById('dot1');
let dot2=document.getElementById('dot2');

function replaceDiv() {
    div1.parentNode.replaceChild(div2, div1);
    div2.style.display = 'block';
    dot2.style.backgroundColor='rgb(34, 34, 34)'
    dot1.style.backgroundColor='#bbb'

}

function replaceDiv2() {
    div2.parentNode.replaceChild(div1,div2);
    div1.style.display = 'block';
    dot1.style.backgroundColor='rgb(34, 34, 34)'
    dot2.style.backgroundColor='#bbb'

}


