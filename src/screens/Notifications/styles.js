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
  justify-content: space-between;
  margin-top: 10px;
`;

export const BalanceButton = styled.TouchableOpacity`
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const Balance = styled.Text`
 color: #00fc6c;
 text-align: center;
 font-size: 16px;
`;

export const Divider = styled.Text`
  border-bottom-width: 2px; 
  border-color: #1e222b;
`;
