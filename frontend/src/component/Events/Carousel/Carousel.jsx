import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel, CCarouselItem , CImage} from "@coreui/react";
import './style.css';

export default function Carousel({data}) {
    // const ReactImg= "./assets/img/hero-bg_2.jpg";
    let leng= data.length;
    let i=0;
    function increment (){
      i++;
    }
  return (
    <>
    <CCarousel className='carousels' controls indicators>
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`} />
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
  {i!==leng && (
    <CCarouselItem>   
    <CImage className="d-block w-100 carousel-img" src={data[i]} alt={`slide ${i+1}`}/>
    {increment()}
  </CCarouselItem>
  )}
    </CCarousel>
    </>
  )
}
