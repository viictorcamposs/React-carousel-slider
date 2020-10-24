import styled from 'styled-components';

export const Banner = styled.div` 
  display: flex;
  align-items: center;

  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Carousel = styled.div`
  position: absolute;
  left: 5%;
  width: 30em;
  height: 30em;
  box-shadow: 2px 2px 12px -2px rgba(0,0,0,.9);
  border: 2px solid white;

  .slider {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slider img {
    width: 30em;
    object-fit: cover;
  }
  .aws-btn {
  --slider-height-percentage: 60%;
  --slider-transition-duration: 575ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 40px;
  --organic-arrow-color: #d85f6a;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: #d85f6a;
  --control-bullet-active-color: #d85f6a;
  --loader-bar-color: #851515;
  --loader-bar-height: 6px;
}
`;