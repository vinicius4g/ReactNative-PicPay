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

export default function StoreBody() {
    return (
      <Container>
        <Header>
          <TitleHeader>Lojas</TitleHeader>  
          <ButtonSeeMore>
            <TitleSeeMore>Ver mais  > </TitleSeeMore>
          </ButtonSeeMore>
        </Header>

        <Card>
          <CardHeader>
            <Logo source={uber} />
            <Info>
              <TitleCard> 
                Uber Pré-Pago
              </TitleCard>
              <Description> 
                Compre créditos para viajar de Uber
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
        <Card>
          <CardHeader>
            <Logo source={bus} />
            <Info>
              <TitleCard> 
                Cartão de Transporte
              </TitleCard>
              <Description> 
                Bilhete Único SP
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
        <Card>
          <CardHeader>
            <Logo source={uber} />
            <Info>
              <TitleCard> 
                Uber Pré-Pago
              </TitleCard>
              <Description> 
                Compre créditos para viajar de Uber
              </Description>    
            </Info>         
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Logo source={bus} />
            <Info>
              <TitleCard> 
                Cartão de Transporte
              </TitleCard>
              <Description> 
                Bilhete Único SP
              </Description>    
            </Info>         
          </CardHeader>
        </Card>

      </Container>    
    );
}