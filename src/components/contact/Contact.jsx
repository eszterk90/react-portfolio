import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import Form from './Form';
import ContactInfo from './ContactInfo';

function Contact() {

  return (
    <Wrapper className='main-contact'>
      <Form/>
      <ContactInfo/>
    </Wrapper>
  )
}
const Wrapper = styled.section `
 
`

export default Contact