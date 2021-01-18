import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`
`;

export const Header = styled.View`
  height: 74px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.TextInput`
    flex:1;
    font-size: 16px;
    background-color: #fff;
    height: 40px;
    margin-left: 20px;
    margin-right: 16px;
    padding: 8px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;
