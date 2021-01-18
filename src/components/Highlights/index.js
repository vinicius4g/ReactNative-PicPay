import React from 'react';

import { 
    Container, 
    Header, 
    Title, 
    Option, 
    Img, 
}from './styles';

import imgCard1 from '../../images/doacoes.jpeg';
import imgCard2 from '../../images/credito.jpeg';

const items = [
  {
    key: String(Math.random()),
    img: imgCard1,
  },
  {
    key: String(Math.random()),
    img: imgCard2,
  },
];

export default function Highlights() {
  return(
    <>   
      <Header>
        <Title>Destaques:</Title>
      </Header> 
    
      <Container>
        {items.map((item) =>(
        <Option key={item.key}>         
            <Img source={item.img}/>
        </Option>
        ))}    
     </Container>   
   </>
  );  
}



