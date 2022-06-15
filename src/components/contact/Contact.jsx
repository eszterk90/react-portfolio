import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import Form from './Form'

function Contact() {

  return (
    <Wrapper className='main-contact'>
      <div className='header'>
        <h1>Let's get in touch!</h1>
      </div>
     
      <Form/>
    </Wrapper>
  )
}
const Wrapper = styled.section `
 
`

export default Contact