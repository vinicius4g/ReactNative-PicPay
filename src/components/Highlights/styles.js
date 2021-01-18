import styled from 'styled-components/native';

export const Header = styled.View`
`;

export const Title = styled.Text`
  margin-top: 25px;
  padding: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  font-weight: bold;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
      paddingLeft: 16,
  },
}))`
`;

export const Option = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  margin-top: -14px;
  margin-left: -14px;
`;

export const Img = styled.Image`
  border-radius: 18px;
  width: 320px;
  height: 170px;
  margin-right: 20px;
`;

