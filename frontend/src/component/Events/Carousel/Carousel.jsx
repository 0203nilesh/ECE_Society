import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel, CCarouselItem , CImage} from "@coreui/react";
import './style.css';

export default function Carousel({data}) {
    const ReactImg= "./assets/img/hero-bg_2.jpg";
  return (
    <>
    <CCarousel className='carousels' controls indicators>
  <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={ReactImg} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100 carousel-img" src={ReactImg} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100 carousel-img" src={ReactImg} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    </>
  )
}
