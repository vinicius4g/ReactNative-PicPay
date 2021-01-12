import React from 'react';

import { 
    Wrapper, 
    Header,
    Container,
    BalanceTitle,
    Balance,
    BalanceButton, 
    Divider,
} from './styles';

import NotificationPosts from '../../components/NotificationsPosts';

export default function Notifications () {
    return(
      <Wrapper>
        <Header>
          <BalanceTitle>Notificações</BalanceTitle>   
          <BalanceButton>
            <Balance>Configurar</Balance>
          </BalanceButton>                                                        
        </Header>        
        
        <Divider />
        
        <Container>
          <NotificationPosts />
        </Container>        
      </Wrapper>
    );
}