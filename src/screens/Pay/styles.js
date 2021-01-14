import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  padding: 0 16px;
  margin-top: 16px;
`;