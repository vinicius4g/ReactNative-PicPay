import React from 'react';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
const searchIcon = <FontAwesome5 name="search" size={16} color="red" />;

import Highlights from '../../components/Highlights';
import StoreBody from '../../components/StoreBody';
import StoreGames from '../../components/StoreGames';
import StoreMusic from '../../components/StoreMusic';
import StoreTvs from '../../components/StoreTvs';

import { 
    Wrapper, 
    Header,
    Container, 
    Search,
} from './styles';

export default function Store() {
    return(
      <Wrapper>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                                  
            <Search             
            placeholder='Quem você quer pagar?' 
            style={{textAlign: 'center'}}
            >       
            </Search>            
        </Header>
        <Container>
        
        {/* Destaques */}
        <Highlights />
        
        {/* Lojas */}
        <StoreBody />
         
        {/* Games */}
        <StoreGames />

        {/* Musicas */}
        <StoreMusic />

        {/* Tvs */}
        <StoreTvs />
       
        </Container>        
      </Wrapper>
    );
}

