import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css"
import home from "./Home.png"
import home1 from "./turbin.jpg"
import home2 from "./solar.jpg"

export default function Carousals() {
  return (
    <div>
      <div class="slideshow-container">
        <div class="slide fade">
        <img src={home} width={100}/>
        <div class="text">Caption One</div>
      </div>

     <div class="slide fade">
       <img src={home1} width={100}/>
       <div class="text">Caption Two</div>
     </div>
     <div class="slide fade">
       <img src={home2} width={100}/>
       <div class="text">Caption Three</div>
     </div>
      <a class="prev" onclick={plusSlides(-1)}>&#10094;</a>
      <a class="next" onclick={plusSlides(1)}>&#10095;</a>
     </div>
    </div>
  )
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n - 1; // Adjust for 1-based index in showSlides
  showSlides();
}
