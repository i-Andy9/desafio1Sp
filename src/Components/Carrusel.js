/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import img1 from '../Assets/Img/bhxvgs3h.bmp'
import img2 from '../Assets/Img/qz9zny6a.bmp'
import img3 from '../Assets/Img/z (24).jpg'
import {  useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';



const items = [
  {
    src: img1,
    altText: 'link to fb',
    link: 'www.facebook.com',
    caption: 'Desarrollo de Software a medida'
  },
  {
    src: img2,
    link:'www.instagram.com',
    altText: 'link to instagram',
    caption: 'Estrategia comercial'
  },
  {
    src: img3,
    altText: 'link to tiktok',
    link:'www.tiktok.com',
    caption: 'Innovacion con redes sociales'
  }
];

  
  const Carrusel = (props) =>{

        const history = useHistory()
       const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);

      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }

      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        return (
          <CarouselItem

          onClick={ () => history.push(`${item.link}`)} 

            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <Image src={item.src} fluid   alt={item.altText} style={{maxHeight:'100vh', width:'100%'}} />
            
            <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
        );

      });

      return (
          <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
  );
      }
export default Carrusel
