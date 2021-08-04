import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const Carousel2 = (props) =>{
  
const items = [
  {
    src: `${props.trend[0].cover}`,
    altText: 'Slide 1',
    caption: null,
    header: null,
    key: '1'
  },
  {
    src: `${props.trend[1].cover}`,
    altText: 'Slide 2',
    caption: null,
    header: null,
    key: '2'
  },
  {
    src: `${props.trend[4].cover}`,
    altText: 'Slide 3',
    caption: null,
    header: null,
    key: '3'
  },
  {
    src: `${props.trend[8].cover}`,
    altText: 'Slide 4',
    caption: null,
    header: null,
    key: '4'
  },
  {
    src: `${props.trend[13].cover}`,
    altText: 'Slide 5',
    caption: null,
    header: null,
    key: '5'
  },
 ];
  return(
 <UncontrolledCarousel items={items} id = 'crap' className = 'boo' />
  )
}
export default Carousel2;