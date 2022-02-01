import React from 'react';
import spinner from './spinner.gif';
import styled from 'styled-components';

const Spinner = () => {
  return <Container>
    <img src={spinner} alt="loading..."/>
  </Container>;
};
const Container = styled.div`
 img{
   width:200px;
   margin:auto;
   display:block
 }
`
export default Spinner;
