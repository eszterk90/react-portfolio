import React from 'react';
import styled, {keyframes} from 'styled-components';

function TextAnimation() {

const textArray = 'Drop'.split('');



  return (
    <Wrapper className='message'><p>{textArray.map((letter, index) => <span key={index}>{letter}</span>)} me a message if you want to say hi!</p></Wrapper>
  )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% {opacity: 1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0);}
    75% {opacity: 1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0);}
    100% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
`

const Wrapper = styled.span `
    display: inline-block;
   
   span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
   }
   span:nth-child(1) {
       animation-delay: 0.1s;
   }
   span:nth-child(2) {
       animation-delay: 0.2s;
   }
   span:nth-child(3) {
       animation-delay: 0.3s;
   }
   span:nth-child(4) {
       animation-delay: 0.4s;
   }
`

export default TextAnimation