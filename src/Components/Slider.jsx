import React, { useEffect, useState } from 'react';
import AwesomeSlider  from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import * as S from './styled'; 

import img1 from '../Img/1.png';
import img2 from '../Img/3.png';
import img3 from '../Img/2.png';
import img4 from '../Img/4.png';
import img5 from '../Img/5.png';
import img6 from '../Img/6.png';

const sliderArr = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(sliderArr);
  }, []);

  return(
    <S.Banner>
      <S.Carousel>
        <AwesomeSlider className="slider aws-btn" mobileTouch={true}>
          {images.map(image => (
            <div><img src={image} alt="Courses"/></div>
          ))}
        </AwesomeSlider>
      </S.Carousel>
    </S.Banner>
  );
};