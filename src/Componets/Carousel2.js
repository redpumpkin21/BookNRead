import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const Carousel2 = (props) =>{
  
const items = [
  {
    src: `${props.trend[0].cover}`,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: `${props.trend[1].cover}`,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: `${props.trend[4].cover}`,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: `${props.trend[8].cover}`,
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  },
  {
    src: `${props.trend[13].cover}`,
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '5'
  },
 ];
  return(
 <UncontrolledCarousel items={items} />
  )
}
export default Carousel2;