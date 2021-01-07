import React from 'react';

import { Container, Title, Option, Img }from './styles';

import imgCard8 from '../../images/08.png';
import imgCard9 from '../../images/09.png';
import imgCard10 from '../../images/10.png';
import imgCard11 from '../../images/11.png';
import imgCard12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: imgCard8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: imgCard9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: imgCard10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: imgCard11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: imgCard12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76',
  },

];


export default function Tips() {
  return(
    <Container>
      {items.map((item) =>(
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img}/>
        </Option>
      ))}
    </Container>
  );  
}