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

let hamburger_div = document.getElementById('hamburger-menu');
let banner=document.getElementById('swipe-container');
var c=0;
// When the user clicks on div, open the popup
function myFunction() {
    hamburger_div.style.display = 'block';
    banner.style.display = 'none';
    hamburger_div.style.transition= '0.6s ease;';
    
    

    c=c+1
    if (c>1){
        hamburger_div.style.display = 'none';
        banner.style.display = 'block';
        c=0;
    }

}

let index_div = document.getElementById('index');
let product1_div = document.getElementById('product1');

function replaceproduct1() {
    product1_div.style.display = 'block';
    index_div.style.display = 'none';

}
let login_div = document.getElementById('login');
let homepage_div = document.getElementById('hompepage');
// let parent_div = document.getElementById('parent');
let phoneno = document.getElementById("phoneno").value;

function replacelogin() {
    if (!isNaN(phoneno)==true && phoneno.toString().length==10) 
    {
        homepage_div.style.display = 'block';
        login_div.style.display = 'none';
    } 
    else {
        login.innerHTML += "<center><p>Please enter a 10 digit phone number.</p></center>";
    }
  }

 
