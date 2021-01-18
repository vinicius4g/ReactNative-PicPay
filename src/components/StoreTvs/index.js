import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { 
    Container, 
    Header, 
    TitleHeader,
    ButtonSeeMore,
    TitleSeeMore,
    Card, 
    CardHeader, 
    Logo,
    Info,
    TitleCard, 
    Description,
} from './styles';

import uber from '../../images/02.png';
import bus from '../../images/03.png';
import sky from '../../images/04.png';

export default function StoreTvs() {
    return (
      <Container>
        <Header>
          <TitleHeader>Tvs</TitleHeader>  
          <ButtonSeeMore>
            <TitleSeeMore>Ver mais  > </TitleSeeMore>
          </ButtonSeeMore>
        </Header>

        <Card>
          <CardHeader>
            <Logo source={sky} />
            <Info>
              <TitleCard> 
                SKY TV 
              </TitleCard>
              <Description> 
                Pague sua conta SKY
              </Description>    
            </Info>         
          </CardHeader>
        </Card>
     
        <Card>
          <CardHeader>
            <Logo source={sky} />
            <Info>
              <TitleCard> 
                SKY TV Pré-Pago
              </TitleCard>
              <Description> 
                Recarga da SKY TV
              </Description>    
            </Info>         
          </CardHeader>
        </Card>

      </Container>    
    );
}