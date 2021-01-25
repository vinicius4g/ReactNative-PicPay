import React from 'react';

import { 
  Container, 
  Title, 
  Option, 
  IconCard,
  OptionBody,
  CardBody,
  IconCardBody,
  TitleBody,
  SubTitle,
  Img,
  TextFooter,
  OptionFooter,
}from './styles';

import { 
  Feather, 
  FontAwesome, 
  Ionicons, 
  Fontisto, 
  AntDesign, 
  SimpleLineIcons, 
  Entypo, 
} from '@expo/vector-icons';

const UserIcon = <FontAwesome name="user-circle" size={18} color="#fff"/>;
const Pix = <Feather name="check-square" size={18} color="#fff"/>;
const Billet = <Ionicons name="barcode-outline" size={18} color="#fff"/>;
const CardMachine = <Fontisto name="shopping-pos-machine" size={18} color="#fff"/>;
const Charge = <AntDesign name="export2" size={18} color="#fff"/>;

const Store = <SimpleLineIcons name="bag" size={18} color="#fff" />;
const Local = <Entypo name="location-pin" size={18} color="#fff" />;



const Phone = <Feather name="smartphone" size={18} color="#fff" />;
const Bus = <Ionicons name="ios-bus-outline" size={18} color="#fff" />


const items = [
  {
    key: String(Math.random()),
    icone: UserIcon,
    title: 'Pagar pessoas',
  },
  {
    key: String(Math.random()),
    icone: Pix,
    title: '                                              Pix',
  },
  {
    key: String(Math.random()),
    icone: Billet,
    title: 'Pagar  boleto',
  },
  {
    key: String(Math.random()),
    icone: CardMachine,
    title: 'Pagar nas maquininhas',
  },
  {
    key: String(Math.random()),
    icone: Charge,
    title: 'Fazer Cobrança',
  },
];

const itemsBody = [
  {
    key: String(Math.random()),
    icone: Store,
    title: 'Store',
    subTitle: 'Compre o que quiser sem sair de casa',
  },
  {
    key: String(Math.random()),
    icone: Local,
    title: 'Local',
    subTitle: 'Confira estabelecimentos perto de você',
  },

];

const itemsFooter = [
  {
    key: String(Math.random()),
    icone: Phone,
    title: 'Recarga de Celular',
  },
  {
    key: String(Math.random()),
    icone: Bus,
    title: 'Cartão transporte',
  },

];

export default function Tips() {
  return(
  <>
    <Container>
      {items.map((item) =>(
        <Option key={item.key}>
          <IconCard>{item.icone}</IconCard> 
          <Title>{item.title}</Title>
          {/* <Img source={item.img}/> */}
        </Option>
      ))}
    </Container>

    <CardBody>
      {itemsBody.map((item) =>(
        <OptionBody key={item.key}>
          <IconCardBody>{item.icone}</IconCardBody> 
          <TitleBody>{item.title}</TitleBody>          
          <SubTitle>{item.subTitle}</SubTitle>
        </OptionBody>
      ))}
    </CardBody>
    
   
    <TextFooter>Serviços</TextFooter>

      <Container>
        {itemsFooter.map((item) =>(
          <OptionFooter key={item.key}>
            <IconCard>{item.icone}</IconCard> 
            <Title>{item.title}</Title>
          </OptionFooter>
        ))}
    </Container> 

  </>
  );  
}