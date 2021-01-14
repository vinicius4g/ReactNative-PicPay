import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import TransactionsCards from '../../components/TransactionsCards';

import { 
    Wrapper, 
    Header,
    Container, 
    Title,
} from './styles';


export default function Pay () {
    return(
      <Wrapper>
        <Container>
          
          {/* Cabecalho */}
          <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />    
          </Header>
          <Title>Transações</Title>

          <TransactionsCards />

        </Container>        
      </Wrapper>
    );
}