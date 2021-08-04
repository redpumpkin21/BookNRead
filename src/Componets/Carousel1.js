import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    
    altText: 'save 15% or more',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: "https://wallpapercave.com/blank-white-wallpapers#google_vignette",
    altText: 'I do',
    caption: 'I do',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    
    altText: 'Who uses divs in a div?',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel1 = () =>{
  document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('img').forEach(function(img){
     img.onerror = function(){this.style.display='none';};
    })
 });
 return(
<UncontrolledCarousel items={items} />
 )
} 

export default Carousel1;