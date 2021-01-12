import React from 'react';

import { 
  Card, 
  Message,
  TextMessageOne,
  TextMessage, 
  TextMessageFooter, 
  Divider,
  Bold,
} from './styles';

export default function Notifications() {
  return (
    <>
      <Card>
        <Message>
          <TextMessageOne>
            Pague o que quiser com PicPay hoje e ganhe 20% de volta de até R$50. Toque para saber mais!  
          </TextMessageOne>
          <TextMessageFooter>Ontem ás 19:55</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            <Bold>@viniciuszura</Bold> colocou R$100,00 no seu PicPay.  
          </TextMessage>
          <TextMessageFooter>Ontem às 15:02</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Pague o que quiser com PicPay hoje e ganhe 10% de volta de até R$100. Toque para saber mais!  
          </TextMessage>
          <TextMessageFooter>Ontem às 10:06</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Pague o que quiser com PicPay hoje e ganhe 40% de volta de até R$30. Saiba mais!  
          </TextMessage>
          <TextMessageFooter>9 de jan às  21:15</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Identificamos um novo acesso à sua conta. Toque para saber mais.  
          </TextMessage>
          <TextMessageFooter>8 de jan às  20:15</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Pague o que quiser com PicPay hoje e ganhe 20% de volta de até R$50. Toque para saber mais.  
          </TextMessage>
          <TextMessageFooter>7 de jan às  12:30</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            <Bold>@viniciuszura</Bold> colocou R$50,00 no seu PicPay.  
          </TextMessage>
          <TextMessageFooter>6 de jan às  22:30</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Identificamos um novo acesso à sua conta. Toque para saber mais.  
          </TextMessage>
          <TextMessageFooter>6 de jan às  17:30</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Pague o que quiser com PicPay hoje e ganhe 5% de volta de até R$200. Toque para saber mais.  
          </TextMessage>
          <TextMessageFooter>5 de jan às  13:50</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      <Card>
        <Message>
          <TextMessage>
            Pague o que quiser com PicPay hoje e ganhe 10% de volta de até R$200. Toque para saber mais.  
          </TextMessage>
          <TextMessageFooter>4 de jan às  10:40</TextMessageFooter>
        </Message>
      </Card>     
      <Divider />
      
      
    </>
    
    );
}



